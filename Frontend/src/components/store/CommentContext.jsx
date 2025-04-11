import { createContext, useState, useEffect } from "react";
import {
  getData,
  addComment as apiAddComment,
  deleteData as apiDeleteData,
  editData,
  apiAddReply,
} from "../../api/api";

export const CommentContext = createContext();

export default function CommentProvider({ children }) {
  const [comments, setComments] = useState([]);
  console.log("comments", comments);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData();
      if (res) setComments(res);
    };

    fetchData();
  }, []);

  const addComment = async (newComment) => {
    const createdComment = await apiAddComment(newComment);
    console.log("從後端回來的資料：", createdComment);
    if (createdComment) setComments((prev) => [...prev, createdComment]);
  };

  const deleteData = async (id) => {
    const result = await apiDeleteData(id);
    if (result) {
      setComments((prev) => prev.filter((comment) => comment.id !== id));
    }
  };

  const edit = async (newContent, id) => {
    const result = await editData(newContent, id);
    if (result) {
      setComments((prev) =>
        prev.map((comment) => (comment.id === id ? result : comment))
      );
    }
  };

  const addReply = async (commentId, newReply) => {
    try {
      const res = await apiAddReply(commentId, newReply);
      if (res) {
        setComments((prev) =>
          prev.map((comment) => {
            if (comment.id === commentId) {
              const currentReplies = Array.isArray(comment.replies)
                ? comment.replies
                : []; // ← 如果 undefined 就給空陣列
              return {
                ...comment,
                replies: [...currentReplies, res],
              };
            }
            return comment;
          })
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CommentContext.Provider
      value={{ comments, addComment, deleteData, edit, addReply }}
    >
      {children}
    </CommentContext.Provider>
  );
}
