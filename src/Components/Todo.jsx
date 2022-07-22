import { useState, useEffect, useRef } from "react"

function Todo({ showMemoryLeak }) {
  const [isLoading, setIsLoading] = useState(true)
  const [todo, setTodo] = useState({})

  const isMounted = useRef(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data)
            setIsLoading(false)
          }
        }, 5000)
      })
    // USING THE RETURN FOR WHEN OBJECT IS UNMOUNTED
    return () => {
      isMounted.current = showMemoryLeak
    }
  }, [showMemoryLeak, isMounted])
  return isLoading ? <h2>Loading...</h2> : <h2>{todo.title}</h2>
}
export default Todo
