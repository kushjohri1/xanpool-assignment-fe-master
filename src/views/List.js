import axios from 'axios'
import { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import { useRoutes, randomBgColor } from '../utils'
//import request from '../utils/request'

function App() {
  const [list, setList] = useState([])
  const { history } = useRoutes()

  const getList = () => {
    fetch('http://localhost:3000/books')
        .then(res => res.json())
        .then((data) => {
          setList(data)
        })
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <div className="list-wrapper">
      <h1>Book List</h1>
      <Masonry
        breakpointCols={5}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {list.map(({ id, title, author }) => (
          <div
            className="book"
            style={{ background: randomBgColor() }}
            onClick={() => history.push(`/book/${id}`)}
          >
            <h1>{title}</h1>
            <h5>by {author}</h5>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default App;
