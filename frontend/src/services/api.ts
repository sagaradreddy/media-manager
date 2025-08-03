import { Media } from "@/types";
import axios from "axios";
const BASE_URL = "http://localhost:3000"; 
let API_URL = `${BASE_URL}/api/media/addMedia`;

export const fetchMedia = async (skip=0, take=30): Promise<Media[]> => {
  const response = await axios.get(`${API_URL}?skip=${skip}&take=${take}`);
  return response.data;
};

export const addMedia = async (media: {
  title: string;
  type: string;
  director: string;
  budget: number;
  location: string;
  duration: number;
  year: number;
}) => {
  const response = await axios.post(API_URL, media);
  return response.data;
};

export const updateMedia = async (
  id: number,
  media: {
    title: string;
    type: string;
    director: string;
    budget: number;
    location: string;
    duration: number;
    year: number;
  },
) => {
  const response = await axios.put(`${API_URL}/${id}`, media);
  return response.data;
};

export const deleteMedia = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
