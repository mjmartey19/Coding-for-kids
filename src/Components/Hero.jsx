import React from 'react';
import { Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from './../assets/slide-1.png';
import slide2 from './../assets/slide-2.png';
import slide3 from './../assets/slide-3.png';
import slide4 from './../assets/slide-4.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Hero.css';

// Initialize Swiper core components
SwiperCore.use([Navigation, Autoplay]);

function Hero() {
  return (
    <div className='relative' id='home'>
      <Swiper
        className=" z-[-1]"
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${slide1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className="slide"
        >
          <div className="content">
            <h3>Coding For Kids And Teens Program</h3>
            <p>
              Unlock your Child's Potential with our Coding Adventure for Young Minds. Join our 6-week Coding for Kids and Teens program in the Ashanti Region. Suitable for ages 5 to 19.
            </p>
            <h2>RATE: Ghc750.00 (Gh600 early bird discount).</h2>
            <a href="http://bit.ly/coding4kidsandteens" className="btn">
              Register
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url(${slide2})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className="slide"
        >
          <div className="content">
            <h3>Coding For Kids And Teens Program</h3>
            <p>
              Unlock your Child's Potential with our Coding Adventure for Young Minds. Join our 6-week Coding for Kids and Teens program in the Ashanti Region. Suitable for ages 5 to 19.
            </p>
            <h2>RATE: Ghc750.00 (Gh600 early bird discount).</h2>
            <a href="http://bit.ly/coding4kidsandteens" className="btn">
              Register
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url(${slide3})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className="slide"
        >
          <div className="content">
            <h3>Coding For Kids And Teens Program</h3>
            <p>
              Unlock your Child's Potential with our Coding Adventure for Young Minds. Join our 6-week Coding for Kids and Teens program in the Ashanti Region. Suitable for ages 5 to 19.
            </p>
            <h2>RATE: Ghc750.00 (Gh600 early bird discount).</h2>
            <a href="http://bit.ly/coding4kidsandteens" className="btn">
              Register
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url(${slide4})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className="slide"
        >
          <div className="content">
            <h3>Coding For Kids And Teens Program</h3>
            <p>
              Unlock your Child's Potential with our Coding Adventure for Young Minds. Join our 6-week Coding for Kids and Teens program in the Ashanti Region. Suitable for ages 5 to 19.
            </p>
            <h2>RATE: Ghc750.00 (Gh600 early bird discount).</h2>
            <a href="http://bit.ly/coding4kidsandteens" className="btn">
              Register
            </a>
          </div>
        </SwiperSlide>


      </Swiper>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  );
}

export default Hero;
