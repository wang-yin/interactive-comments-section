import './App.css'
import Comments from './components/Comments'
import Textarea from './components/Textarea'

function App() {

  return (
    <div className='flex flex-col gap-[1rem] lg:gap-[1.2rem]'>
      <Comments />
      <Textarea />
    </div>
  )
}

export default App
