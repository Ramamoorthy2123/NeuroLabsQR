
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware

from pymongo import MongoClient
import gridfs
import qrcode
from io import BytesIO
import os
import uuid

app = FastAPI()

# CORS Middleware setup
origins = [
     "http://www.neurolabs.co.in",  
     "http://neurolabs.co.in",
     "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB setup
MONGODB_URL="mongodb://Neurolabs:Neurolabs@123@your-mongodb-host:27017/file_database"

client = MongoClient(MONGODB_URL)
db = client["file_database"]
fs = gridfs.GridFS(db)

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to the File Upload and QR Code API"}

# Helper function to generate QR code
def generate_qr_code_data(file_url: str) -> BytesIO:
    try:
        qr = qrcode.QRCode()
        qr.add_data(file_url)
        qr.make(fit=True)
        img = qr.make_image(fill='black', back='white')

        buffer = BytesIO()
        img.save(buffer, format='PNG')
        buffer.seek(0)
        return buffer
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"QR code generation failed: {str(e)}")

# Upload file endpoint
@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        filename_without_ext = os.path.splitext(file.filename)[0]

        existing_file = fs.find_one({"filename": filename_without_ext})
        if existing_file:
            filename_without_ext += f"_{uuid.uuid4().hex[:8]}"

        file_id = fs.put(file.file, filename=filename_without_ext)
        return {"filename": filename_without_ext, "id": str(file_id)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Upload failed: {str(e)}")

# Retrieve file details endpoint
@app.get("/file/{filename}")
async def get_file(filename: str):
    try:
        file = fs.find_one({"filename": filename})
        if not file:
            raise HTTPException(status_code=404, detail="File not found")
        file_url = f"http://neurolabs.co.in/download/{filename}"
        return {"filename": filename, "file_url": file_url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"File retrieval failed: {str(e)}")

# Generate QR code for file download URL
@app.get("/qrcode/{filename}")
async def generate_qr_code(filename: str):
    try:
        file_url = f"http://neurolabs.co.in/download/{filename}"
        qr_code_image = generate_qr_code_data(file_url)
        return StreamingResponse(qr_code_image, media_type="image/png")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"QR code generation failed: {str(e)}")

# Download file endpoint
@app.get("/download/{filename}")
async def download_file(filename: str):
    try:
        file = fs.find_one({"filename": filename})
        if not file:
            raise HTTPException(status_code=404, detail="File not found")

        return StreamingResponse(file, media_type="application/octet-stream", headers={"Content-Disposition": f"attachment; filename={filename}"})
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"File download failed: {str(e)}")

# Endpoint to list all files in the database
@app.get("/files")
async def list_files():
    try:
        files = fs.find()
        file_list = []
        for file in files:
            file_list.append({
                "filename": file.filename,
                "upload_date": file.upload_date,
                "file_id": str(file._id)
            })
        return file_list
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving file list: {str(e)}")
