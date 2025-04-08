import reply from "/images/icon-reply.svg";

function CommentItem({ comment }) {

  return (
    <>
    <div
      key={comment.id}
      className="bg-White rounded-[10px] py-[1rem] px-[1.02rem] flex flex-col gap-[1rem] lg:flex-row lg:px-[1.5rem] lg:py-[1.45rem] lg:gap-[1.5rem] "
    >
      <div className="hidden lg:flex lg:flex-col lg:bg-Very-light-gray lg:px-[.6rem] lg:items-center lg:rounded-[10px] lg:h-[6.3rem] lg:py-[.6rem] lg:gap-[1.1rem]">
        <button className="cursor-pointer group">
          <svg
            width="11"
            height="11"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[#C5C6EF] group-hover:fill-[#5357B6] transition-colors duration-200"
          >
            <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
          </svg>
        </button>
        <p className="text-Moderate-blue font-fw-500 w-[20px] text-[1.05rem] text-center">
          {comment.score}
        </p>
        <button className="cursor-pointer group">
          <svg
            width="11"
            height="3"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[#C5C6EF] group-hover:fill-[#5357B6] transition-colors duration-200"
          >
            <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
          </svg>
        </button>
      </div>

      <div>
        <div className="flex items-center gap-[1rem] w-full">
          <div className="w-[32px]">
            <img src={comment.user.image.webp} alt="avatars"></img>
          </div>
          <p className="font-fw-500">{comment.user.username}</p>
          <p className="text-Grayish-Blue font-fw-400">{comment.createdAt}</p>
          <div className="hidden lg:flex lg:items-center lg:gap-[.5rem] lg:ml-auto cursor-pointer hover:opacity-60">
            <div>
              <img src={reply} alt="reply"></img>
            </div>
            <p className="text-Moderate-blue font-fw-500 text-[1.02rem]">
              Reply
            </p>
          </div>
        </div>

        <div className="pt-[1rem]">
          <p className="text-Grayish-Blue text-[1.005rem]">{comment.content}</p>
        </div>
      </div>

      <div className="flex justify-between lg:hidden">
        <div className="flex items-center justify-center rounded-[10px] bg-Very-light-gray py-[.45rem] px-[.85rem] gap-[1rem] ">
          <button>
            <svg
              width="11"
              height="11"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#C5C6EF] group-hover:fill-[#5357B6] transition-colors duration-200"
            >
              <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
            </svg>
          </button>
          <p className="text-Moderate-blue font-fw-500 w-[20px] text-[1.05rem] text-center">
            {comment.score}
          </p>
          <button>
            <svg
              width="11"
              height="3"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#C5C6EF] group-hover:fill-[#5357B6] transition-colors duration-200"
            >
              <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-[.5rem] cursor-pointer hover:opacity-60">
          <div>
            <img src={reply} alt="reply"></img>
          </div>
          <p className="text-Moderate-blue font-fw-500 text-[1.02rem]">Reply</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default CommentItem;
