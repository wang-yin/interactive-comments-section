import juliusomo from "/images/avatars/image-juliusomo.webp";
import { CommentContext } from "./store/CommentContext";
import { useContext, useState } from "react";

function Textarea() {
  const [content, setContent] = useState("")
  const { addComment } = useContext(CommentContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newComment = {
      content,
      createdAt: new Date().toISOString(),
      score: 0,
      user: {
        username: "juliusomo",
        image: {
          webp: "images/avatars/image-juliusomo.webp"
        }
      },
      replies: []
    }

    await addComment(newComment)
    setContent("")
  }

  
  return (
    <form className="px-[1rem] pt-[1rem] pb-[.8rem] bg-White rounded-[10px] lg:flex lg:items-start lg:px-[1.5rem] lg:pt-[1.3rem] lg:gap-4.5 lg:pb-[1.2rem]" onSubmit={handleSubmit}>
      <div className="hidden lg:w-13.5 lg:block lg:mt-[.3rem]">
        <img src={juliusomo}></img>
      </div>
      <textarea
        className="resize-none font-normal py-[.65rem] px-[1.4rem] border-1 border-Light-gray rounded-[10px] w-full h-[95px] placeholder-Grayish-Blue focus-visible:outline-2 focus-visible:outline-Moderate-blue"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a comment..."
      ></textarea>
      <div className="flex items-center justify-between pt-[.6rem] lg:pt-0">
        <div className="w-8 lg:hidden">
          <img src={juliusomo} alt="juliusomo"></img>
        </div>
        <div>
          <button
            type="submit"
            className="px-[1.95rem] bg-Moderate-blue h-[48px] rounded-[8px] text-White cursor-pointer hover:opacity-60 font-semibold"
          >
            SEND
          </button>
        </div>
      </div>
    </form>
  );
}

export default Textarea;
