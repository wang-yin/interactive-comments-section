import { createContext, useState, useEffect } from "react";
import {
  getData,
  addComment as apiAddComment,
  deleteData as apiDeleteData,
  editData,
  apiAddReply,
  apiDeleteReplyData,
  apiEditReply,
  apiUpdateCommentScore,
  apiUpdateReplyScore
} from "../../api/api";

export const CommentContext = createContext();

export default function CommentProvider({ children }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData();
      if (res) setComments(res);
    };

    fetchData();
  }, []);

  const addComment = async (newComment) => {
    const createdComment = await apiAddComment(newComment);
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
                : [];
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

  const deleteReplyData = async (commentId, replyId) => {
    try {
      const result = await apiDeleteReplyData(commentId, replyId);
      if (result) {
        setComments((prev) =>
          prev.map((comment) =>
            comment.id === commentId
              ? {
                  ...comment,
                  replies: comment.replies.filter(
                    (reply) => reply.id !== replyId
                  ),
                }
              : comment
          )
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const editReply = async (newContent, commentId, replyId) => {
    const result = await apiEditReply(newContent, commentId, replyId);
    if (result) {
      setComments((prev) =>
        prev.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === replyId ? { ...reply, content: newContent } : reply
              ),
            };
          }
          return comment;
        })
      );
    }
  };

  const updateCommentScore = async (commentId, delta) => {  
  const updated = await apiUpdateCommentScore(commentId, delta);
  if (updated) {
    setComments((prev) =>
      prev.map((comment) => (comment.id === commentId ? updated : comment))
    );
  }
};

const updateReplyScore = async (commentId, replyId, delta) => {
  
  const updated = await apiUpdateReplyScore(commentId, replyId, delta);
  if (updated) {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId ? updated : comment
      )
    );
  }
};


  return (
    <CommentContext.Provider
      value={{
        comments,
        addComment,
        deleteData,
        edit,
        addReply,
        deleteReplyData,
        editReply,
        updateCommentScore,
        updateReplyScore
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}
