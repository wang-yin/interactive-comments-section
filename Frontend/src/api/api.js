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

export const addComment = async (newComment) => {
  try {
    const response  = await axios.post(`${API_BASE_URL}/create`, newComment)
    console.log(newComment)
    return response.data;
  } catch(error) {
    console.log(error)
  }
}

export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/comments/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editData = async (data ,id) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/comments/edit/${id}`, { content: data })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const apiAddReply = async (commentId, newReply) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reply/${commentId}`, newReply);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiDeleteReplyData = async (commentId, replyId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/reply/${commentId}/${replyId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const apiEditReply = async (newContent, commentId, replyId) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/reply/edit/${commentId}/${replyId}`, { content: newContent })
    return response.data
  } catch (error) {
    console.log(error);
  }
}