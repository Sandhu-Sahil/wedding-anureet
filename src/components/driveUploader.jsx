import React, { useState } from 'react';

const CloudinaryUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  const handleUpload = () => {
    selectedFiles.forEach((file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'YOUR_UPLOAD_PRESET'); // Replace with your actual upload preset

      fetch(`https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload`, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('File uploaded:', data);
        })
        .catch((error) => {
          console.error('File upload failed:', error);
        });
    });
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default CloudinaryUploader;
