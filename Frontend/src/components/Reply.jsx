import amyrobson from "/images/avatars/image-amyrobson.webp";
import reply from "/images/icon-reply.svg";
import plus from "/images/icon-plus.svg";
import minus from "/images/icon-minus.svg";
import Delete from "/images/icon-delete.svg";
import edit from "/images/icon-edit.svg";
import Textarea from "./Textarea";

function Reply() {
  return (
    <>
    <div className="lg:pl-[2.6rem]">
      <div className="flex flex-col pl-[1rem] border-l-2 border-Light-gray gap-[1rem] lg:pl-[2.75rem] lg:gap-[1.5rem]">
        <div className="bg-White rounded-[10px] p-[1rem] flex flex-col gap-[1rem] lg:flex-row lg:p-[1.6rem] lg:gap-[1.5rem]">
            <div className="hidden lg:flex lg:flex-col lg:bg-Very-light-gray lg:px-[.6rem] lg:items-center lg:rounded-[10px] lg:h-[6.3rem] lg:py-[.6rem] lg:gap-[1.1rem]">
              <button>
                <img src={plus}></img>
              </button>
              <p className="text-Moderate-blue font-fw-500 w-[20px] text-[1.05rem] text-center">
                4
              </p>
              <button>
                <img src={minus}></img>
              </button>
            </div>
          
          <div>
            <div className="flex items-center gap-[1rem] w-full">
            <div className="w-[32px]">
              <img src={amyrobson}></img>
            </div>
            <p className="font-fw-500">ramsesmiron</p>
            <p className="text-Grayish-Blue font-fw-400">1 week ago</p>
            <div className="hidden lg:flex lg:items-center lg:gap-[.5rem] lg:ml-auto ">
              <div>
                <img src={reply}></img>
              </div>
              <p className="text-Moderate-blue font-fw-500 text-[1.02rem]">
                Reply
              </p>
            </div>
          </div>
          <div className="pt-[1rem]">
            <p className="text-Grayish-Blue text-[1.005rem] leading-[1.475]">
              <a className="text-Moderate-blue font-fw-500">@maxblagun</a>{" "}
              If you're still new, I'd recommend focusing on the fundamentals of
              HTML, CSS, and JS before considering React. It's very tempting to
              jump ahead but lay a solid foundation first.
            </p>
          </div>
          </div>
          
          <div className="flex justify-between mt-[.15rem] lg:hidden">
            <div className="flex items-center justify-center rounded-[10px] bg-Very-light-gray py-[.45rem] px-[.85rem] gap-[1rem]">
              <button>
                <img src={plus}></img>
              </button>
              <p className="text-Moderate-blue font-fw-500 w-[20px] text-[1.05rem] text-center">
                4
              </p>
              <button>
                <img src={minus}></img>
              </button>
            </div>
            <div className="flex items-center gap-[.5rem]">
              <div>
                <img src={reply}></img>
              </div>
              <p className="text-Moderate-blue font-fw-500 text-[1.02rem]">
                Reply
              </p>
            </div>
          </div>
        </div>


        {/* 第二 */}
        <div className="bg-White rounded-[10px] p-[1rem] flex flex-col gap-[1rem] lg:flex-row lg:p-[1.6rem] lg:gap-[1.5rem]">
            <div className="hidden lg:flex lg:flex-col lg:bg-Very-light-gray lg:px-[.6rem] lg:items-center lg:rounded-[10px] lg:h-[6.3rem] lg:py-[.6rem] lg:gap-[1.1rem]">
              <button>
                <img src={plus}></img>
              </button>
              <p className="text-Moderate-blue font-fw-500 w-[20px] text-[1.05rem] text-center">
                2
              </p>
              <button>
                <img src={minus}></img>
              </button>
            </div>
          
          <div>
            <div className="flex items-center w-full lg:gap-0">
            <div className="w-[32px]">
              <img src={amyrobson}></img>
            </div>
            <p className="font-fw-500 ml-4">juliusomo</p>
            <div className="bg-Moderate-blue ml-[.5rem] px-[.45rem] h-[1.2rem] rounded-[3px] mr-4">
              <p className="text-[.8rem] text-White">you</p>
            </div>
            <p className="text-Grayish-Blue font-fw-400">2 days ago</p>
            <div className="hidden lg:flex lg:items-center lg:gap-[1.5rem] lg:ml-auto ">
              <div className="flex items-center gap-[.5rem] cursor-pointer hover:opacity-60">
                <div>
                  <img src={Delete}></img>
                </div>
                <p className="text-Soft-Red font-fw-500 text-[1.02rem]">
                  Delete
                </p>
              </div>
              <div className="flex items-center gap-[.5rem] cursor-pointer hover:opacity-60">
                <div>
                  <img src={edit}></img>
                </div>
                <p className="text-Moderate-blue font-fw-500 text-[1.02rem]">
                  Edit
                </p>
              </div>
            </div>
          </div>
          <div className="pt-[1rem]">
            <p className="text-Grayish-Blue text-[1.005rem] leading-[1.475]">
              <a className="text-Moderate-blue font-fw-500">@ramsesmiron</a>{" "}
              I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.
            </p>
          </div>
          </div>
          
          <div className="flex justify-between mt-[.15rem] lg:hidden">
            <div className="flex items-center justify-center rounded-[10px] bg-Very-light-gray py-[.45rem] px-[.85rem] gap-[1rem]">
              <button>
                <img src={plus}></img>
              </button>
              <p className="text-Moderate-blue font-fw-500 w-[20px] text-[1.05rem] text-center">
                2
              </p>
              <button>
                <img src={minus}></img>
              </button>
            </div>
            <div className="flex items-center gap-[1rem]">
              <div className="flex items-center gap-[.5rem]">
                <div className="cursor-pointer hover:opacity-60">
                  <img src={Delete}></img>
                </div>
                <p className="text-Soft-Red font-fw-500 text-[1.02rem]">
                  Delete
                </p>
              </div>
              <div className="flex items-center gap-[.5rem]">
                <div className="cursor-pointer hover:opacity-60">
                  <img src={edit}></img>
                </div>
                <p className="text-Moderate-blue font-fw-500 text-[1.02rem]">
                  Edit
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 第二 */}

    
      </div>
    </div>
      
    </>
  );
}

export default Reply;
