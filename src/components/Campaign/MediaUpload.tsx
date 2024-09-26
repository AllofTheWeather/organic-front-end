import React, { useState } from 'react';

interface MediaUploadProps {
  campaignId: number;
}

const MediaUpload: React.FC<MediaUploadProps> = ({ campaignId }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('campaignId', String(campaignId));

    // TODO: Submit media to the backend
    console.log('Submitting file for campaign:', campaignId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default MediaUpload;
