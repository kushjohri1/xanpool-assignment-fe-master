import { useEffect, useState } from 'react'
import { randomBgColor } from '../utils'
import{useRoutes} from '../utils'
// import request from '../utils/request'

function App() {
  const [details, setDetails] = useState({})
  const { title, author, description, year } = details
const{params} = useRoutes()

  const getDetails = () => {
    const{id}= params
    // setDetails(
    //   {
    //     id: 0,
    //     title: 'Psychology',
    //     year: 1939,
    //     description: 'Aliquam velit sapien, sodales id elit sed, condimentum posuere leo. Cras mattis neque lorem, in consectetur felis mollis vel. Integer.',
    //     author: 'Sigmund Freud'
    //   }
    // )
    // API Request
    fetch('http://localhost:3000/books/' +id)
    .then(res => res.json())
    .then((data) => {
      setDetails(data)
    })
  }

  useEffect(() => {
    getDetails()
  }, [])

  return (
    <div className="list-wrapper">
      <h1>Details</h1>
      <div style={{ display: 'flex', width: '100%' }}>
        <div
          className="book single"
          style={{ background: randomBgColor() }}
        >
          <h1>{title}</h1>
          <h5>by {author}</h5>
        </div>
        <div className="details-wrapper">
          <h1>{title}</h1>
          <h6>by <i>{author}</i></h6>
          <h5>{description}</h5>
          <div style={{ height: '1px', width: '100%', background: '#333' }} />
          <h5>Year published: {year}</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
