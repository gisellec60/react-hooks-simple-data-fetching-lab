import React, {useState, useEffect} from 'react'

function App() {
  const [getDog, setGetDog] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect (()=> {
    fetch("https://dog.ceo/api/breeds/image/random")
       .then((res) => res.json())
       .then((dogImage) =>{setGetDog(dogImage.message) })
       setIsLoaded(true)                       
},[])

if (!isLoaded) return <p>Loading...</p>

return (
    <div>
      <img src={getDog} alt="A Random Dog"/>
    </div>
  )
}

export default App
