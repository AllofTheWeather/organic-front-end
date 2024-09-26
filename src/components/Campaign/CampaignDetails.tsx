import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import { fetchCampaignById } from '../../services/apiService';
import MediaUpload from './MediaUpload';
import ManageAccounts from './ManageAccounts';
import SchedulePosts from './SchedulePosts';

interface Campaign {
  id: number;
  name: string;
  description: string;
}

const CampaignDetails: React.FC = () => {
  const { id } = useParams(); // Access the campaign ID from the URL
  const [campaign, setCampaign] = useState<Campaign | null>(null);

  useEffect(() => {
    const loadCampaign = async () => {
      if (id) {
        const campaignData = await fetchCampaignById(Number(id)); // Convert id to a number
        setCampaign(campaignData);
      }
    };

    loadCampaign();
  }, [id]); // Re-fetch the campaign when the ID changes

  if (!campaign) return <div>Loading...</div>;

  return (
    <div>
      <h1>{campaign.name}</h1>
      <p>{campaign.description}</p>

      <h2>Upload Media</h2>
      <MediaUpload campaignId={campaign.id} />

      <h2>Manage Accounts</h2>
      <ManageAccounts campaignId={campaign.id} />

      <h2>Scheduled Posts</h2>
      <SchedulePosts campaignId={campaign.id} />
    </div>
  );
};

export default CampaignDetails;
