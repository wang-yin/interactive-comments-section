import Delete from "/images/icon-delete.svg";
import edit from "/images/icon-edit.svg";
import plus from "/images/icon-plus.svg";
import minus from "/images/icon-minus.svg";

function MyComment({ comment }) {
  return (
    <>
      <div className="bg-White rounded-[10px] p-[1rem] flex flex-col gap-[1rem] lg:flex-row lg:p-[1.6rem] lg:gap-[1.5rem]">
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
              <div className="flex items-center gap-[.5rem] cursor-pointer hover:opacity-60">
                <div>
                  <img src={Delete} alt="delete"></img>
                </div>
                <p className="text-Soft-Red font-fw-500 text-[1.02rem]">
                  Delete
                </p>
              </div>
              <div className="flex items-center gap-[.5rem] cursor-pointer hover:opacity-60">
                <div>
                  <img src={edit} alt="edit"></img>
                </div>
                <p className="text-Moderate-blue font-fw-500 text-[1.02rem]">
                  Edit
                </p>
              </div>
            </div>
          </div>
          <div className="pt-[1rem]">
            <p className="text-Grayish-Blue text-[1.005rem] leading-[1.475]">
              {comment.content}
            </p>
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
            <div className="flex items-center gap-[.5rem]">
              <div className="cursor-pointer hover:opacity-60">
                <img src={Delete} alt="delete"></img>
              </div>
              <p className="text-Soft-Red font-fw-500 text-[1.02rem]">Delete</p>
            </div>
            <div className="flex items-center gap-[.5rem]">
              <div className="cursor-pointer hover:opacity-60">
                <img src={edit} alt="edit"></img>
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
