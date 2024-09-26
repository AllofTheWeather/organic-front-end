import React, { useEffect, useState } from 'react';
import { fetchCampaigns } from '../../services/apiService';
import CampaignItem from './CampaignItem';

interface Campaign {
  id: number;
  name: string;
  description: string;
}

const CampaignList: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    const loadCampaigns = async () => {
      const campaignsData = await fetchCampaigns();
      setCampaigns(campaignsData);
    };
    
    loadCampaigns();
  }, []);

  return (
    <div>
      <h1>Your Campaigns</h1>
      <ul>
        {campaigns.map((campaign) => (
          <CampaignItem key={campaign.id} campaign={campaign} />
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
