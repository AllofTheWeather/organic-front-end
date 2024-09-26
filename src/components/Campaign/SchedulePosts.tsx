import React, { useEffect, useState } from 'react';

interface SchedulePostsProps {
  campaignId: number;
}

const SchedulePosts: React.FC<SchedulePostsProps> = ({ campaignId }) => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    // TODO: Fetch scheduled posts for the campaign
    setPosts([
      { id: 1, caption: 'Post 1', date: '2024-01-01' },
      { id: 2, caption: 'Post 2', date: '2024-01-02' }
    ]);
  }, [campaignId]);

  return (
    <div>
      <h3>Scheduled Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.caption} - {post.date}
          </li>
        ))}
      </ul>

      {/* TODO: Add logic to edit or schedule new posts */}
    </div>
  );
};

export default SchedulePosts;
