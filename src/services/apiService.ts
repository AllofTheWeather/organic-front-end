import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:44321/api/', // Assuming your backend runs here
});

export const fetchCampaigns = async () => {
    const response = await api.get('/campaigns');
    return response.data;
};

export const fetchCampaignById = async (id: number) => {
const response = await api.get(`/campaigns/${id}`);
return response.data;
};