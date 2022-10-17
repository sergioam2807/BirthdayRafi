import { Autoplay, Pagination } from "swiper"
import { Swiper , SwiperSlide } from "swiper/react";
import "swiper/css"


export const Slider = () => {

 

  return (
    <>
      <Swiper 
        id="slider"
        modules={[Pagination, Autoplay ]}
        autoplay={{
          delay:3000,
          disableOnInteraction: false
        }}
        pagination = {{
          el:".pagination",
          clickable:true,
        }}
        slidesPerView={4}
        breakpoints ={{
          320: {
        slidesPerView: 2,
        spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
            }}}
      >

      <SwiperSlide> 
        <img className='invitation_image animate__animated animate__tada' src="https://i.ibb.co/YLbrLXK/rafi.jpg" alt="rafi" border="0" />
      </SwiperSlide>

      <SwiperSlide> 
        <img className='invitation_image animate__animated animate__tada' src="https://i.ibb.co/YLbrLXK/rafi.jpg" alt="rafi" border="0" />
      </SwiperSlide>

      <SwiperSlide> 
        <img className='invitation_image animate__animated animate__tada' src="https://i.ibb.co/YLbrLXK/rafi.jpg" alt="rafi" border="0" />
      </SwiperSlide>

      <SwiperSlide> 
        <img className='invitation_image animate__animated animate__tada' src="https://i.ibb.co/YLbrLXK/rafi.jpg" alt="rafi" border="0" />
      </SwiperSlide>

      <SwiperSlide> 
        <img className='invitation_image animate__animated animate__tada' src="https://i.ibb.co/YLbrLXK/rafi.jpg" alt="rafi" border="0" />
      </SwiperSlide>
      

    </Swiper>
    </>
  )
}
