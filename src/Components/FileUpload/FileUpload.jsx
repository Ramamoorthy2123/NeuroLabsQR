// import React, { useState } from 'react';
// import axios from 'axios';
// import './FileUpload.css';

// function FileUpload() {
//   const [file, setFile] = useState(null);
//   const [filename, setFilename] = useState('');
//   const [qrCode, setQrCode] = useState('');
//   const [error, setError] = useState('');
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [fileDetails, setFileDetails] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setError('');
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       setError('Please select a file to upload');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('http://www.neuroverse.co.in/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         },
//         onUploadProgress: (progressEvent) => {
//           const { loaded, total } = progressEvent;
//           const percent = Math.round((loaded * 100) / total);
//           setUploadProgress(percent);
//         }
//       });

//       if (response.data.message === 'File already exists') {
//         alert(`Alert: The file ${response.data.filename} already exists.`);
//       } else {
//         alert('File uploaded successfully');
//       }

//       setFile(null);
//       setUploadProgress(0); // Reset progress after upload
//       setError('');
//     } catch (err) {
//       if (err.response) {
//         // Server responded with a status other than 2xx
//         setError(`Upload failed: ${err.response.data.detail || 'Unknown error'}`);
//       } else if (err.request) {
//         // Request was made but no response received
//         setError('No response received from the server.');
//       } else {
//         // Something went wrong in setting up the request
//         setError(`Error: ${err.message}`);
//       }
//     }
//   };

//   const handleSearch = async () => {
//     if (!filename) {
//       setError('Please enter a filename to search');
//       return;
//     }

//     try {
//       // Fetch file details
//       const fileResponse = await axios.get(`http://www.neuroverse.co.in/files/${filename}`);
//       const fileData = fileResponse.data;

//       // Fetch QR code
//       const qrCodeResponse = await axios.get(`http://www.neuroverse.co.in/qrcode/${filename}`, {
//         responseType: 'blob'
//       });
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64data = reader.result.split(',')[1];
//         setQrCode(base64data);
//       };
//       reader.readAsDataURL(qrCodeResponse.data);

//       // Set file details
//       setFileDetails(fileData);
//       setError('');
//     } catch (err) {
//       if (err.response) {
//         setError(`Search failed: ${err.response.data.detail || 'Unknown error'}`);
//       } else if (err.request) {
//         setError('No response received from the server.');
//       } else {
//         setError(`Error: ${err.message}`);
//       }
//     }
//   };

//   return (
//     <div className='div'>
//       <h2>QR Code File Generator</h2>
//       <input type="file" onChange={handleFileChange} id='file' />
//       <button onClick={handleUpload}>Upload File</button>

//       {uploadProgress > 0 && <div>Uploading: {uploadProgress}%</div>}

//       {error && <p style={{ color: 'red', fontSize: '20px' }}>{error}</p>}

//       {qrCode && <img src={`data:image/png;base64,${qrCode}`} alt="QR Code" />}
//     </div>
//   );
// }

// export default FileUpload;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './FileUpload.css';

// function FileUpload() {
//   const [file, setFile] = useState(null);
//   const [filename, setFilename] = useState('');
//   const [qrCode, setQrCode] = useState('');
//   const [error, setError] = useState('');
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [fileDetails, setFileDetails] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setError('');
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       setError('Please select a file to upload');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('http://www.neuroverse.co.in/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         },
//         onUploadProgress: (progressEvent) => {
//           const { loaded, total } = progressEvent;
//           const percent = Math.round((loaded * 100) / total);
//           setUploadProgress(percent);
//         }
//       });

//       if (response.data.message === 'File already exists') {
//         alert(`Alert: The file ${response.data.filename} already exists.`);
//       } else {
//         alert('File uploaded successfully');
//       }

//       setFile(null);
//       setUploadProgress(0); // Reset progress after upload
//       setError('');
//     } catch (err) {
//       if (err.response) {
//         // Server responded with a status other than 2xx
//         setError(`Upload failed: ${err.response.data.detail || 'Unknown error'}`);
//       } else if (err.request) {
//         // Request was made but no response received
//         setError('No response received from the server.');
//       } else {
//         // Something went wrong in setting up the request
//         setError(`Error: ${err.message}`);
//       }
//     }
//   };

//   const handleSearch = async () => {
//     if (!filename) {
//       setError('Please enter a filename to search');
//       return;
//     }

//     try {
//       // Fetch file details
//       const fileResponse = await axios.get(`http://www.neuroverse.co.in/files/${filename}`);
//       const fileData = fileResponse.data;

//       // Fetch QR code
//       const qrCodeResponse = await axios.get(`http://www.neuroverse.co.in/qrcode/${filename}`, {
//         responseType: 'blob'
//       });
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64data = reader.result.split(',')[1];
//         setQrCode(base64data);
//       };
//       reader.readAsDataURL(qrCodeResponse.data);

//       // Set file details
//       setFileDetails(fileData);
//       setError('');
//     } catch (err) {
//       if (err.response) {
//         setError(`Search failed: ${err.response.data.detail || 'Unknown error'}`);
//       } else if (err.request) {
//         setError('No response received from the server.');
//       } else {
//         setError(`Error: ${err.message}`);
//       }
//     }
//   };

//   return (
//     <div className='div'>
//       <h2>QR Code File Generator</h2>
//       <input type="file" onChange={handleFileChange} id='file' />
//       <button onClick={handleUpload}>Upload File</button>

//       {uploadProgress > 0 && <div>Uploading: {uploadProgress}%</div>}

//       {error && <p style={{ color: 'red', fontSize: '20px' }}>{error}</p>}

//       {qrCode && <img src={`data:image/png;base64,${qrCode}`} alt="QR Code" />}
//     </div>
//   );
// }

// export default FileUpload;
import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [error, setError] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileDetails, setFileDetails] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percent = Math.round((loaded * 100) / total);
          setUploadProgress(percent);
        }
      });

      if (response.data.filename) {
        alert('File uploaded successfully');
      }

      setFile(null);
      setUploadProgress(0); // Reset progress after upload
      setError('');
    } catch (err) {
      if (err.response) {
        setError(`Upload failed: ${err.response.data.detail || 'Unknown error'}`);
      } else if (err.request) {
        setError('No response received from the server.');
      } else {
        setError(`Error: ${err.message}`);
      }
    }
  };

  const handleSearch = async () => {
    if (!filename) {
      setError('Please enter a filename to search');
      return;
    }

    try {
      // Fetch file details
      const fileResponse = await axios.get(`http://neurolabs.co.in/file/${filename}`);
      const fileData = fileResponse.data;

      // Fetch QR code
      const qrCodeResponse = await axios.get(`http://neurolabs.co.in/qrcode/${filename}`, {
        responseType: 'blob'
      });

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result.split(',')[1];
        setQrCode(base64data);
      };
      reader.readAsDataURL(qrCodeResponse.data);

      // Set file details
      setFileDetails(fileData);
      setError('');
    } catch (err) {
      if (err.response) {
        setError(`Search failed: ${err.response.data.detail || 'Unknown error'}`);
      } else if (err.request) {
        setError('No response received from the server.');
      } else {
        setError(`Error: ${err.message}`);
      }
    }
  };

  return (
    <div className='div'>
      <h2>QR Code File Generator</h2>
      <input type="file" onChange={handleFileChange} id='file' />
      <button onClick={handleUpload}>Upload File</button>

      {uploadProgress > 0 && <div>Uploading: {uploadProgress}%</div>}

      {error && <p style={{ color: 'red', fontSize: '20px' }}>{error}</p>}

      {fileDetails && (
        <div>
          <h3>File Details</h3>
          <p>Filename: {fileDetails.filename}</p>
          <p>Download URL: <a href={fileDetails.file_url} target="_blank" rel="noopener noreferrer">{fileDetails.file_url}</a></p>
        </div>
      )}

      {qrCode && <img src={`data:image/png;base64,${qrCode}`} alt="QR Code" />}
    </div>
  );
}

export default FileUpload;
