import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { privateApi } from '../../services/Axios';
import './topRated.css'

const Top_rated = () => {
    const [rated_image, setRated] = useState([])
    
    const getTopData = async () =>{
        try {
            const datas = await privateApi.get('movie/top_rated')
            setRated(datas.results) 
            console.log(rated_image)
        } catch (error) {
            throw error      
        } 
    }
    useEffect(()=>{
        getTopData()
    },[])
  return (
    <div className="top_rated">
        <h2>TOP_RATED</h2>
        <div className="top_rated-slider">
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        
        pagination={{
        dynamicBullets: true,
      }}
    loop
    autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
        // className="mySwiper"
      >

        {rated_image.slice(1,10).map((el,idx)=>{
            return <SwiperSlide key={idx} className='top_item'>
                <img src={`https://image.tmdb.org/t/p/w500/${el?.backdrop_path}`} alt="rasmcha" />
                <h3 className="description">{el.title}</h3>
            </SwiperSlide>
        })}
      </Swiper>
        </div>
    </div>
  )
}

export default Top_rated