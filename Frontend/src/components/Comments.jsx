import Reply from "./Reply";
import MyComment from "./MyComment";
import CommentItem from "./CommentItem";
import { useContext } from "react";
import { CommentContext } from "../components/store/CommentContext";

function Comments() {
  const { comments } = useContext(CommentContext);
  const currentUser = "juliusomo";

  return (
    <>
      {comments.map((comment) =>
      
        comment.replies.length > 0 ? (
          <>
            <CommentItem comment={comment}/>
            {comment.replies.map((reply) => {
              return <Reply key={reply.id} />;
            })}
          </>
        ) : (
          <CommentItem comment={comment}/>
        )
      )}

      {/* 註解 */}

      <MyComment />
    </>
  );
}

export default Comments;
