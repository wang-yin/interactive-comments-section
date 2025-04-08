import axios from "axios"

const API_BASE_URL = 'http://localhost:3000';

export const getData = async () => {
  try {
    const response = await axios.get(API_BASE_URL)
    return response.data
  } catch(error) {
    console.log(error)
    return []
  }
}