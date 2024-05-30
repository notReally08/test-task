import axios from 'axios';
import SearchResult from '../interface';

const apiClient = axios.create({
  baseURL: 'https://652f91320b8d8ddac0b2b62b.mockapi.io',
  headers: {
    'Content-type': 'application/json',
  },
});

export const getAllTags = async () => {
  const response = await apiClient.get<SearchResult[] | []>("/autocomplete");
  console.log(response)
  return response.data;
}