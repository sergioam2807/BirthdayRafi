import { Autoplay, Pagination } from "swiper"
import { Swiper , SwiperSlide } from "swiper/react";
import "swiper/css"
import "./slider.css"

export const Slider = () => {

 

  return (
    <>
    <div className="slider">
        <Swiper 
          // className="swiper_slider"
          id="slider"
          modules={[Pagination, Autoplay ]}
          autoplay={{
            delay:2000,
            disableOnInteraction: false
          }}
          pagination = {{
            el:".pagination",
            clickable:true,
          }}
          slidesPerView={1}
          spaceBetween = {20}
          breakpoints={{
            850:{
              width:850,
              slidesPerView:2,
            },
            500: {
              slidesPerView: 1,
              width:500
            }}
          }
        >
        <div className="swiper_container">
          <SwiperSlide  className="swiperslide"> 
            <img className='slider_image' src="https://i.ibb.co/VvzY9P0/Whats-App-Image-2022-10-23-at-11-08-20-AM.jpg" alt="Whats-App-Image-2022-10-23-at-11-08-20-AM" border="0" />
          </SwiperSlide>

          <SwiperSlide> 
            <img className='slider_image' src="https://i.ibb.co/k0x7dfw/Whats-App-Image-2022-10-23-at-11-07-38-AM.jpg" alt="Whats-App-Image-2022-10-23-at-11-07-38-AM" border="0" />
          </SwiperSlide>

          <SwiperSlide> 
            <img className='slider_image' src="https://i.ibb.co/PwhqkWk/Whats-App-Image-2022-10-23-at-11-07-26-AM.jpg" alt="Whats-App-Image-2022-10-23-at-11-07-26-AM" border="0" />
          </SwiperSlide>

          <SwiperSlide> 
            <img className='slider_image' src="https://i.ibb.co/KwN4dBn/Whats-App-Image-2022-10-23-at-11-07-14-AM.jpg" alt="Whats-App-Image-2022-10-23-at-11-07-14-AM" border="0" />
          </SwiperSlide>

          <SwiperSlide> 
            <img className='slider_image' src="https://i.ibb.co/NCtxnPM/Whats-App-Image-2022-10-23-at-11-05-05-AM.jpg" alt="Whats-App-Image-2022-10-23-at-11-05-05-AM" border="0"/>
          </SwiperSlide>
        
        </div>
      </Swiper>

    </div>
    </>
  )
}
