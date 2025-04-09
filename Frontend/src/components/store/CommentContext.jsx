import { createContext, useState, useEffect } from "react"
import { getData, addComment as apiAddComment } from "../../api/api"

export const CommentContext = createContext()

export default function CommentProvider({ children }) {
  const [comments, setComments] = useState([])
  console.log("comments", comments)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData()
      if (res) setComments(res)
    }

    fetchData()
  }, [])

  const addComment = async  (newComment) => {
    const createdComment = await apiAddComment(newComment)
    console.log("從後端回來的資料：", createdComment);
    if(createdComment) setComments((prev) => [...prev, createdComment])
  }

  return (
    <CommentContext.Provider value={{comments, addComment}}>
      {children}
    </CommentContext.Provider>
  )
}

