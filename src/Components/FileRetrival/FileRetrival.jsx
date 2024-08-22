// import React, { useState } from 'react';
// import axios from 'axios';

// function FileRetrieval() {
//   const [filename, setFilename] = useState('');
//   const [fileDetails, setFileDetails] = useState(null);
//   const [qrCode, setQrCode] = useState('');
//   const [error, setError] = useState('');

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
//         try {
//           const base64data = reader.result.split(',')[1];
//           setQrCode(base64data);
//         } catch (error) {
//           setError(`QR code processing failed: ${error.message}`);
//         }
//       };
//       reader.onerror = (error) => {
//         setError(`FileReader error: ${error.message}`);
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
//       <h2>Retrieve File and Display QR Code</h2>
      
//       {/* File Search Section */}
//       <div>
//         <input
//           type="text"
//           placeholder="Enter filename to search"
//           value={filename}
//           onChange={(e) => setFilename(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {/* Error Handling */}
//       {error && <p style={{ color: 'red', fontSize: '20px' }}>{error}</p>}

//       {/* Display File Details */}
//       {fileDetails && (
//         <div>
//           <h2>File Details</h2>
//           <p>Filename: {fileDetails.filename}</p>
//           <p>Download URL: <a href={fileDetails.file_url} target="_blank" rel="noopener noreferrer">{fileDetails.file_url}</a></p>
//         </div>
//       )}

//       {/* Display QR Code */}
//       {qrCode && <img src={`data:image/png;base64,${qrCode}`} alt="QR Code" />}
//     </div>
//   );
// }

// export default FileRetrieval;

// import React, { useState } from 'react';
// import axios from 'axios';

// function FileRetrieval() {
//   const [filename, setFilename] = useState('');
//   const [fileDetails, setFileDetails] = useState(null);
//   const [qrCode, setQrCode] = useState('');
//   const [error, setError] = useState('');

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
//         try {
//           const base64data = reader.result.split(',')[1];
//           setQrCode(base64data);
//         } catch (error) {
//           setError(`QR code processing failed: ${error.message}`);
//         }
//       };
//       reader.onerror = (error) => {
//         setError(`FileReader error: ${error.message}`);
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
//       <h2>Retrieve File and Display QR Code</h2>
      
//       {/* File Search Section */}
//       <div>
//         <input
//           type="text"
//           placeholder="Enter filename to search"
//           value={filename}
//           onChange={(e) => setFilename(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {/* Error Handling */}
//       {error && <p style={{ color: 'red', fontSize: '20px' }}>{error}</p>}

//       {/* Display File Details */}
//       {fileDetails && (
//         <div>
//           <h2>File Details</h2>
//           <p>Filename: {fileDetails.filename}</p>
//           <p>Download URL: <a href={fileDetails.file_url} target="_blank" rel="noopener noreferrer">{fileDetails.file_url}</a></p>
//         </div>
//       )}

//       {/* Display QR Code */}
//       {qrCode && <img src={`data:image/png;base64,${qrCode}`} alt="QR Code" />}
//     </div>
//   );
// }

// export default FileRetrieval;

import React, { useState } from 'react';
import axios from 'axios';

function FileRetrieval() {
  const [filename, setFilename] = useState('');
  const [fileDetails, setFileDetails] = useState(null);
  const [qrCode, setQrCode] = useState('');
  const [error, setError] = useState('');

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
        responseType: 'blob' // Ensure correct response type for binary data
      });

      const reader = new FileReader();
      reader.onloadend = () => {
        try {
          const base64data = reader.result.split(',')[1];
          setQrCode(base64data);
        } catch (error) {
          setError(`QR code processing failed: ${error.message}`);
        }
      };
      reader.onerror = (error) => {
        setError(`FileReader error: ${error.message}`);
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
      <h2>Retrieve File and Display QR Code</h2>
      
      {/* File Search Section */}
      <div>
        <input
          type="text"
          placeholder="Enter filename to search"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Error Handling */}
      {error && <p style={{ color: 'red', fontSize: '20px' }}>{error}</p>}

      {/* Display File Details */}
      {fileDetails && (
        <div>
          <h2>File Details</h2>
          <p>Filename: {fileDetails.filename}</p>
          <p>Download URL: <a href={fileDetails.file_url} target="_blank" rel="noopener noreferrer">{fileDetails.file_url}</a></p>
        </div>
      )}

      {/* Display QR Code */}
      {qrCode && <img src={`data:image/png;base64,${qrCode}`} alt="QR Code" />}
    </div>
  );
}

export default FileRetrieval;

