import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CampaignList from './components/Dashboard/CampaignList';
import CampaignDetails from './components/Campaign/CampaignDetails';

// Define your routes with the updated pattern
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Dashboard</h1>
        <CampaignList />
      </div>
    ),
  },
  {
    path: "campaigns/:id",
    element: <CampaignDetails />,
  },
]);

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App