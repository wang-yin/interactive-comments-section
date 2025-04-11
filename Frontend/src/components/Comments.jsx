import Reply from "./Reply";
import MyComment from "./MyComment";
import CommentItem from "./CommentItem";
import { useContext } from "react";
import { CommentContext } from "../components/store/CommentContext";
import MyReply from "./MyReply";

function Comments() {
  const { comments } = useContext(CommentContext);
  const currentUser = "juliusomo";

  return (
    <>
      {comments.map((comment) => {
        const isMyComment = comment.user.username === currentUser;
        if (comment.replies.length > 0) {
          return (
            <>
              {isMyComment ? (
                <MyComment comment={comment} />
              ) : (
                <>
                  <CommentItem comment={comment} />
                  {comment.replies.map((reply) => 
                    reply.user.username === currentUser ? (
                      <MyReply key={reply.id} reply={reply} commentId={comment.id}/>
                    ) : (
                      <Reply key={reply.id} reply={reply} commentId={comment.id}/>
                    )
                  )}
                </>
              )}
            </>
          );
        } else {
          return (
            <>
              {isMyComment ? (
                <MyComment comment={comment}/>
              ) : (
                <CommentItem comment={comment}/>
              )}
            </>
          );
        }
      })}

      {/* 註解 */}

    </>
  );
}

export default Comments;
