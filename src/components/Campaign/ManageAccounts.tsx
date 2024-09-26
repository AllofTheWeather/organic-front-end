import React from 'react';

interface ManageAccountsProps {
  campaignId: number;
}

const ManageAccounts: React.FC<ManageAccountsProps> = ({ campaignId }) => {
  // For simplicity, mock accounts can be shown
  const accounts = [
    { id: 1, platform: 'Instagram', username: 'testuser_instagram' },
    { id: 2, platform: 'Twitter', username: 'testuser_twitter' }
  ];

  return (
    <div>
      <h3>Linked Accounts</h3>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.platform}: {account.username}
          </li>
        ))}
      </ul>

      {/* TODO: Add logic to link social media accounts */}
    </div>
  );
};

export default ManageAccounts;
