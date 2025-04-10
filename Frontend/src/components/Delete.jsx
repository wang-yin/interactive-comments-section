import { CommentContext } from "./store/CommentContext";
import { useContext } from "react";

function Delete({ onClose, commentId }) {
  const { deleteData } = useContext(CommentContext);

  const handleDelete = async () => {
    await deleteData(commentId); 
    onClose(); 
  };

  return(
      <div className="w-full max-w-[25rem] space-y-4 rounded-lg bg-white px-6 py-7 xl:space-y-5 xl:p-8">
        <p className="text-2xl font-medium text-Dark-blue">Delete comment</p>
        <p className="text-base font-normal text-Grayish-Blue">Are you sure you want to delete this comment? This will remove the comment and can’t be undone.</p>
        <div className='flex items-center gap-3 md:gap-3.5'>
          <button className='py-3 font-semibold uppercase text-base text-white rounded-lg transition-opacity duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-60 bg-Grayish-Blue w-full px-3 focus-visible:outline-Grayish-Blue' onClick={onClose}>No, Cancel</button>
          <button className='py-3 font-semibold uppercase text-base text-white rounded-lg transition-opacity duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-60 bg-Soft-Red w-full px-3 focus-visible:outline-Soft-Red' onClick={handleDelete}>Yes, Delete</button>
        </div>
      </div>
  )
}

export default Delete