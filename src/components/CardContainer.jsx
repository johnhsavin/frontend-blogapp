import { useState, useEffect } from "react"


export default function CardContainer() {
  const [data, setData] = useState([])
  // 1. When component loads/mounting, fetch data
  useEffect(() => {
    fetch('http://localhost:8080')
      .then((res) => res.json())
      // 2. Put data in state variable.
      .then((cleanData) => setData(cleanData))
      .catch((err) => console.error(err))
  }, [])


  const handleFormSubmit = evt => {
    evt.preventDefault()

    const formData = {}
    formData.title = evt.target.title.value
    formData.content = evt.target.content.value

    fetch('http://localhost:8080', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(cleanData => setData(cleanData))
      .catch(err => console.error(err))
  }


  return (
    <>
      <form action="" onSubmit={e => handleFormSubmit(e)}>
        <label htmlFor=''>
          <input type="text" name="title" />
        </label>
        <label htmlFor="">
          <input type="text" name="content" />
        </label>
        <button type="submit">Add Blog Post</button>


      </form>

      <h2>Card Container</h2>
      <div className="cardContainer">
        {data.map((singlePosts, index) => {

          return (
            <div className="singleCard" key={singlePosts._id}>
              <img src={`https://source.unsplash.com/random/${index}`} alt="" srcSet='' />
              <h2>title: {singlePosts.title}</h2>
              <p>{singlePosts.content}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
