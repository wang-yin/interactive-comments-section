import "./App.css";
import Comments from "./components/Comments";
import Textarea from "./components/Textarea";
import CommentProvider from "./components/store/CommentContext";

function App() {
  return (
    <CommentProvider>
      <div className="flex flex-col gap-[1rem] lg:gap-[1.2rem]">
        <Comments />
        <Textarea />
      </div>
    </CommentProvider>
  );
}

export default App;
