import Delete from "/images/icon-delete.svg";
import editicon from "/images/icon-edit.svg";
import plus from "/images/icon-plus.svg";
import minus from "/images/icon-minus.svg";
import { useState, useContext } from "react";
import { CommentContext } from "./store/CommentContext";
import Modal from "./Modal";
import DeleteComponent from "./Delete";

function MyComment({ comment }) {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);
  const { edit } = useContext(CommentContext)

  const handleEdit = async () => {
    await edit(editedContent, comment.id)
    setIsEdit(false);
  }

  return (
    <>
      {isDelete && (
        <Modal onClose={() => setIsDelete(false)}>
          <DeleteComponent
            onClose={() => setIsDelete(false)}
            commentId={comment.id}
          />
        </Modal>
      )}
      <div
        className="bg-White rounded-[10px] p-[1rem] flex flex-col gap-[1rem] lg:flex-row lg:p-[1.6rem] lg:gap-[1.5rem]"
        key={comment.id}
      >
        <div className="hidden lg:flex lg:flex-col lg:bg-Very-light-gray lg:px-[.6rem] lg:items-center lg:rounded-[10px] lg:h-[6.3rem] lg:py-[.6rem] lg:gap-[1.1rem]">
          <button>
            <img src={plus} alt="plus"></img>
          </button>
          <p className="text-Moderate-blue font-fw-500 w-[20px] text-[1.05rem] text-center">
            {comment.score}
          </p>
          <button>
            <img src={minus} alt="minus"></img>
          </button>
        </div>

        <div className="w-full">
          <div className="flex items-center lg:gap-0">
            <div className="w-[32px]">
              <img src={comment.user.image.webp}></img>
            </div>
            <p className="font-fw-500 ml-4">{comment.user.username}</p>
            <div className="bg-Moderate-blue ml-[.5rem] px-[.45rem] h-[1.2rem] rounded-[3px] mr-4">
              <p className="text-[.8rem] text-White">you</p>
            </div>
            <p className="text-Grayish-Blue font-fw-400">{comment.createdAt}</p>
            <div className="hidden lg:flex lg:items-center lg:gap-[1.5rem] lg:ml-auto ">
              <div
                className="flex items-center gap-[.5rem] cursor-pointer hover:opacity-60"
                onClick={() => setIsDelete(true)}
              >
                <div>
                  <img src={Delete} alt="delete"></img>
                </div>
                <p className="text-Soft-Red font-fw-500 text-[1.02rem]">
                  Delete
                </p>
              </div>
              <div
                className="flex items-center gap-[.5rem] cursor-pointer hover:opacity-60"
                onClick={() => setIsEdit(prev => !prev)}
              >
                <div>
                  <img src={editicon} alt="edit"></img>
                </div>
                <p className="text-Moderate-blue font-fw-500 text-[1.02rem]">
                  Edit
                </p>
              </div>
            </div>
          </div>
          <div className="pt-[1rem]">
            {isEdit ? (
              <div className="flex flex-col items-end gap-4">
                <textarea className="w-full resize-none rounded-lg border border-[var(--color-light-gray)] bg-White p-3 px-6 text-base font-normal text-Grayish-Blue focus-visible:outline-2 focus-visible:outline-Moderate-blue" value={editedContent} onChange={(e) => setEditedContent(e.target.value)}>{comment.content}</textarea>
                <button className="py-3 font-semibold uppercase text-base text-White rounded-lg transition-opacity duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-60 bg-Moderate-blue min-w-[104px] px-5 focus-visible:outline-Moderate-blue" onClick={handleEdit}>Update</button>
              </div>
            ) : (
              <p className="text-Grayish-Blue text-[1.005rem] leading-[1.475]">
                {comment.content}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-[.15rem] lg:hidden">
          <div className="flex items-center justify-center rounded-[10px] bg-Very-light-gray py-[.45rem] px-[.85rem] gap-[1rem]">
            <button>
              <img src={plus} alt="plus"></img>
            </button>
            <p className="text-Moderate-blue font-fw-500 w-[20px] text-[1.05rem] text-center">
              {comment.score}
            </p>
            <button>
              <img src={minus} alt="minus"></img>
            </button>
          </div>
          <div className="flex items-center gap-[1rem]">
            <div
              className="flex items-center gap-[.5rem]"
              onClick={() => setIsDelete(true)}
            >
              <div className="cursor-pointer hover:opacity-60">
                <img src={Delete} alt="delete"></img>
              </div>
              <p className="text-Soft-Red font-fw-500 text-[1.02rem]">Delete</p>
            </div>
            <div className="flex items-center gap-[.5rem]" onClick={() => setIsEdit(prev => !prev)}>
              <div className="cursor-pointer hover:opacity-60">
                <img src={editicon} alt="edit"></img>
              </div>
              <p className="text-Moderate-blue font-fw-500 text-[1.02rem]">
                Edit
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyComment;
