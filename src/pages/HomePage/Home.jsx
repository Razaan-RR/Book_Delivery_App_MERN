import { useEffect, useState } from 'react'
import Coverage from './Components/Coverage'

function Home() {
  const [centerLocations, setCenterLocations] = useState([])

  useEffect(() => {
    fetch('/locations.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('Loaded JSON:', data) 
        setCenterLocations(data)
      })
  }, [])

  return (
    <div>
      <Coverage centerLocations={centerLocations} />
    </div>
  )
}

export default Home
