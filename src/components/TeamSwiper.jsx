import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Navigation, Pagination } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TeamSwiper.css"; 
import team1 from '../assets/images/team1.png'
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";
import leftArrow from "../assets/images/leftarrow.png";
import rightArrow from "../assets/images/rightarrow.png";

const TeamSwiper = () => {
  const teamMembers = [
    { name: "Julian Jarvis", role: "Chairman, Founder and CEO", image: team1 },
    { name: "Peter Montgriffith BC", role: "Finance Expert", image: team2 },
    { name: "Grahame Jackson", role: "Operations Head", image: team3 },
  ];

  return (
    <div className="team-swiper-container">
      <h2 className="team-title">Our Team</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev">
        <img src={leftArrow} alt="Previous" />
      </div>
      <div className="swiper-button-next">
        <img src={rightArrow} alt="Next" />
      </div>
    </div>
  );
};

export default TeamSwiper;
