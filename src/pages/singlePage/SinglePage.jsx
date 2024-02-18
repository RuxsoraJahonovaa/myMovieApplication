import { useEffect , useState } from 'react'
import { privateApi } from '../../services/Axios'
import './singlePage.css'
import Image from '/imgpreview.jpg'
import { useParams } from 'react-router'

const SinglePage = () => {

  const [myMovie, setMyMovie] = useState({})

  const {id} = useParams()
  const movieId = id.split('-')[2]
  console.log(movieId)

  const getSingle = async () =>{
    const singleMovie = await privateApi.get(`/movie/${movieId}`)
    setMyMovie({singleMovie})
    console.log(singleMovie)
    

  }
  useEffect(()=>{
    getSingle()
  },[])
  
  return (
    <div className="singlePage_container">
        <div className="singleBanner">
            {/* <img src={myMovie?.backdrop_path} alt="rasmcha" /> */}
            <h3>2024</h3>

        </div>
        <div className="singleBanner_info">
            <div className="movieName">Name</div>
            <p className="aboutMovie">About</p>


        </div>
    </div>
  )
}

export default SinglePage