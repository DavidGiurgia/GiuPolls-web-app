import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const createPoll = async (pollData) => {
  try {
    const response = await axios.post(`${API_URL}/polls`, pollData);
    return response.data;
  } catch (error) {
    console.error('Error creating poll', error);
  }
};

export const getPolls = async () => {
  try {
    const response = await axios.get(`${API_URL}/polls`);
    return response.data;
  } catch (error) {
    console.error('Error fetching polls', error);
  }
};
