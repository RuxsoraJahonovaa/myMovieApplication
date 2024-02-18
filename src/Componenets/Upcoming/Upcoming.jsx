import { useEffect, useState } from "react"
import { privateApi } from "../../services/Axios"
import './upcoming.css'

const Upcoming = () => {

    const [newMovie, setNewMovie] = useState([])


    const newMovies = async () => {
        const movies = await privateApi.get('movie/upcoming')
        setNewMovie(movies.results)
        console.log(newMovie)
    }

    useEffect(()=>{
        newMovies()
    },[])

  return (
<></>
  )
}

export default Upcoming