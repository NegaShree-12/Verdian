import React, { useRef }  from "react";
import { Box, Typography,IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./OurTeam.css";

// Import images
import julianImage from "../assets/images/team1.png";
import peterImage from "../assets/images/team2.png";
import grahameImage from "../assets/images/team3.png";
import Rectangle1 from '../assets/images/Rectangle1.png'
import Rectangle2 from '../assets/images/Rectangle2.png'

// Team data
const teamMembers = [
  {
    name: "Julian Jarvis",
    title: "Chairman, Founder and CEO",
    description: `
      Julian is an experienced lawyer, businessman, and investor with over 25 years 
      of start-up, private, and public company experience. In the internet and iGaming 
      industries – including America Online Inc., AOL Time Warner Inc., PartyGaming Plc, 
      and other companies. Julian has a focus on fast-growth companies in emerging 
      regulatory environments. Julian's current focus is as CEO and co-founder of 
      Pragmatic Play, a leading multi-award-winning supplier to the international 
      iGaming and betting industries.
    `,
    image: julianImage,
  },
  {
    name: "Peter Montegriffo KC",
    title: "Board Member",
    description: `
      Peter Montegriffo KC has been closely involved in advising major financial 
      services and e-commerce operators establishing a presence in Gibraltar and 
      expanding their activities internationally. This has included working with 
      investment groups and private client family offices. 

      In his capacity as a Consultant at Hassans and member of the firm’s Corporate 
      & Commercial team for over 35 years, Peter’s area of expertise is in Gibraltar 
      and international commercial and private client matters. Peter has worked on a 
      number of public listings on the London Stock Exchange and continues to advise 
      on restructuring, merger, and consolidation exercises. 

      He has also been involved in drafting numerous changes to Gibraltar’s legislation 
      in trusts, financial services, and gaming. Peter was Gibraltar’s Minister for 
      Trade and Industry, with responsibility for economic development and financial 
      services, between May 1996 and February 2000. Peter was appointed KC in Gibraltar 
      in June 2014.
    `,
    image: peterImage,
  },
  {
    name: "Grahame Jackson",
    title: "Senior Advisor",
    description: `
      Grahame Jackson is a Fellow of the Chartered Institute of Taxation and a member 
      of the Chartered Institute of Taxation's prestigious International Taxes Committee. 
      Grahame has advised numerous international gaming companies in matters of taxation 
      and is a regular adviser to other industries on matters of both domestic Gibraltar 
      taxation and international taxation.

      He has written extensively on international information exchange mechanisms, the 
      current international taxation reform in the context of the rule of law, and British 
      Overseas Territories' constitutional relationships with the United Kingdom. Grahame 
      is the Head of the Tax Advisory Team and partner at Hassans.
    `,
    image: grahameImage,
  },
];
const OurTeam = () => {
  const swiperRef = useRef(null);

  return (
    <Box
      id="our-team"
      sx={{
        backgroundColor: "#CFE1DF",
        padding: { xs: "2rem 1rem", md: "5rem" },
        textAlign: "center",
        maxWidth: "1350px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "#091B29",
          marginBottom: "3rem",
          fontSize: "40px",
        }}
      >
        Our Team
      </Typography>

      <IconButton
  className="custom-prev"
  sx={{
    position: "absolute",
    top: "50%",
    left: "2%",
    zIndex: 5,
    backgroundColor: "#11423F",
    color: "#ffffff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    "&:hover": {
      backgroundColor: "#11423F", 
      color: "#ffffff",
    },
    "&:active": {
      backgroundColor: "#11423F", 
      color: "#ffffff",
    },
  }}
  onClick={() => swiperRef.current?.slidePrev()}
>
  <ArrowBackIcon />
</IconButton>

<IconButton
  className="custom-next"
  sx={{
    position: "absolute",
    top: "50%",
    right: "2%",
    zIndex: 5``,
    backgroundColor: "#11423F",
    color: "#ffffff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    "&:hover": {
      backgroundColor: "#11423F", 
      color: "#ffffff", 
    },
    "&:active": {
      backgroundColor: "#11423F", 
      color: "#ffffff",
    },
  }}
  onClick={() => swiperRef.current?.slideNext()}
>
  <ArrowForwardIcon />
</IconButton>
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)} 
        spaceBetween={-30}
        slidesPerView={1.2}
        centeredSlides={true}
        style={{ overflow: "hidden", paddingBottom: "2rem" }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <Box className="team-container">
              <Box className="team-parallelogram"></Box>
              <Box
                component="img"
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <Box className="team-name-box">
                <Typography variant="h5">{member.name}</Typography>
                <Typography variant="subtitle1">{member.title}</Typography>
              </Box>
              <Box className="team-content">
                <Typography variant="body1" className="team-description">
                  {member.description}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default OurTeam;





