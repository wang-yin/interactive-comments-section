import { createContext, useState, useEffect } from "react"
import { getData } from "../../api/api"

export const CommentContext = createContext()

export default function CommentProvider({ children }) {
  const [comments, setComments] = useState([])
  console.log(comments)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData()
      if (res) setComments(res)
    }

    fetchData()
  }, [])

  return (
    <CommentContext.Provider value={{comments, setComments}}>
      {children}
    </CommentContext.Provider>
  )
}

