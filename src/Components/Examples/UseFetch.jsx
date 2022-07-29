import useFetch from "../../Hooks/useFetch"

function UseFetchExample() {
  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  )

  if (isLoading) {
    return <h3>Loading . . .</h3>
  }

  return (
    <ul className='list-group my-4 px-4'>
      {data.map((item) => {
        return (
          <li className='list-group-item' key={item.id}>
            {item.title}
          </li>
        )
      })}
    </ul>
  )
}
export default UseFetchExample
