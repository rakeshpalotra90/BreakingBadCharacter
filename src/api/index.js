import axios from 'axios';

const BaseUrl = 'https://breakingbadapi.com/api/';

export const getBadCharactersList = async () => {
  try {
    const response = await axios.get(`${BaseUrl}characters`);
    return response.data;
  } catch (e) {
    return Promise.reject(e);
  }
};
