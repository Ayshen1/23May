import { BASE_URL } from "./base_url";
import axios from "axios";

//get all Artists
export const getAllArtists = async (name) => {
  let globalData;
  let URL;
  if (!name) {
    URL = BASE_URL+'/artists';
  }
  else{
    URL = BASE_URL+'/artists'+`?name=${name}`;
  }
  await axios.get(URL).then((res) => {
    globalData = res.data.data;
  });
  return globalData;
};
//get Artist by ID
export const getArtistByID = async (ID) => {
  let globalData;
  await axios.get(`${BASE_URL}/artists/${ID}`).then((res) => {
    globalData = res.data.data;
  });
  return globalData;
};

//delete Artist by  ID
export const deleteArtistByID = async (ID) => {
  let deletedArtist;
  await axios.delete(`${BASE_URL}/artists/${ID}`).then((res) => {
    deletedArtist = res.data.data;
  });

  return deletedArtist;
};
//post artist
export const postArtist = (payload) => {
  axios.post(`${BASE_URL}/artists`, payload);
};