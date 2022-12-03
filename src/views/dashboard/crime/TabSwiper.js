import React from "react";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";

//circular
import Circularprogressbar from "../../../components/circularprogressbar.js";

//Count-up
import CountUp from "react-countup";

import DATA from "./data.js";

const TabSwiper = ({ setCurrentCrime, currentCrime }) => {
  return (
    <Swiper
      className="p-0 m-0 mb-2 list-inline "
      slidesPerView={5}
      spaceBetween={32}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      breakpoints={{
        320: { slidesPerView: 1 },
        550: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
        1400: { slidesPerView: 4 },
        1500: { slidesPerView: 5 },
        1920: { slidesPerView: 6 },
        2040: { slidesPerView: 7 },
        2440: { slidesPerView: 8 },
      }}
      data-aos="fade-up"
      data-aos-delay="700"
    >
      {DATA.map((item, index) => {
        return (
          <SwiperSlide
            key={index}
            className="card card-slide"
            onClick={() => setCurrentCrime(item.crime)}
          >
            <div
              className="card-body"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // border: "2px solid yellowgreen",
                padding: "1rem 0 rem",
                cursor: "pointer",
              }}
            >
              <div className="progress-detail">
                <h4 className="counter">{item.crime}</h4>
              </div>
            </div>
          </SwiperSlide>
        );
      })}

      {/* <div className="swiper-button swiper-button-next"></div>
      <div className="swiper-button swiper-button-prev"></div> */}
    </Swiper>
  );
};

export default TabSwiper;
