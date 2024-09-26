import React from 'react';
import { Link } from 'react-router-dom';

interface CampaignItemProps {
  campaign: {
    id: number;
    name: string;
    description: string;
  };
}

const CampaignItem: React.FC<CampaignItemProps> = ({ campaign }) => {
  return (
    <li>
      <Link to={`/campaigns/${campaign.id}`}>
        <h2>{campaign.name}</h2>
        <p>{campaign.description}</p>
      </Link>
    </li>
  );
};

export default CampaignItem;
