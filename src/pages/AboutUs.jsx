import React from "react";
import { Box, Typography, Container } from "@mui/material";
import AboutUsCard from '../components/Aboutuscard'
import Rectangle2 from "../components/Svgcomponent/rectangle2";
import Veridian from "../assets/images/veridian.png";
import Head from "../components/Svgcomponent/head";
import Heart from "../components/Svgcomponent/heart";
import Medal from "../components/Svgcomponent/medal";
import Globe from "../components/Svgcomponent/globe";

const AboutUs = () => {
  return (
    <Box
      id="about-us"
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1350px",
        backgroundColor: "#CFE1DF", // Top background color
        padding: { xs: "5rem 1.5rem", md: "5rem" },
        mx: "auto",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2, // Ensure it's above the background
        }}
      >
        {/* Background Rectangle on Left */}
        <Box
          sx={{
            position: "absolute",
            top: "75%",
            left: "-200px",
            transform: "translateY(-45%) rotate(43deg)",
            zIndex: 1, // Below main content
            width: "130px",
            height: "2300px",
          }}
        >
          <Rectangle2 width="100%" height="100%" />
        </Box>

        {/* Background Rectangle on Right */}
        <Box
          sx={{
            position: "absolute",
            top: "75%",
            right: "-200px",
            transform: "translateY(-50%) rotate(-50deg)",
            zIndex: 1,
            width: "130px",
            height: "2100px",
          }}
        >
          <Rectangle2 width="100%" height="100%" />
        </Box>

        {/* Header Section */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            marginBottom: "2rem",
            color: "#00563B",
            position: "relative",
            zIndex: 3, // Ensure it's above the rectangles
          }}
        >
          About Us
        </Typography>

        {/* Main Content */}
        <Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    backgroundColor: "#fff",
    padding: "3rem",
    borderRadius: "0    px",
    marginBottom: "3rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    position: "relative",
    zIndex: 3, // Above background rectangles
  }}
>
  {/* Veridian Image */}
  <Box sx={{ flex: 1, position: "relative", zIndex: 2 }}>
    <Box className="logo-container">
      <img
        src={Veridian}
        alt="Veridian"
        style={{ width: "150px", height: "auto" }}
        className="logo"
      />
    </Box>
  </Box>

  {/* Text Content */}
  <Box sx={{ flex: 2, textAlign: "left", color: "#333" }}>
    <Typography
      variant="body1"
      sx={{ marginBottom: "1rem", lineHeight: "1.6" }}
    >
      Veridian is an investment, management, and development company based in
      Gibraltar. We create value in our investments by leveraging our
      experience, tried-and-true strategies, and extensive industry expertise.
    </Typography>

    <Typography
      variant="body1"
      sx={{ marginBottom: "1rem", lineHeight: "1.6" }}
    >
      We work with our business management team to develop and implement
      tailored strategies focused on strong products with powerful sales, to
      develop profit-generating growth models. Value creation is fundamental to
      our goal, and we develop our businesses with this in mind.
    </Typography>

    <Typography
      variant="body1"
      sx={{ lineHeight: "1.6" }}
    >
      Veridian's expertise is delivered with a responsible approach to our
      business, our team, our local community, and the environment.
    </Typography>
  </Box>
</Box>


        {/* Cards Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            position: "relative",
            zIndex: 3,
          }}
        >
          {/* Cards with Icons on the Right */}
          <AboutUsCard
          sx={{ borderRadius:"0px"}}
            title="Excellence"
            description="We strive for excellence by continuously honing our skills & expanding our knowledge."
            icon={<Medal />}
          />
          <AboutUsCard
            title="Initiative"
            description="We encourage a proactive mindset where our team is empowered to take initiative."
            icon={<Head />}
          />
          <AboutUsCard
            title="Sustainability"
            description="We are dedicated to sustainable practices that positively impact our environment."
            icon={<Heart />}
          />
          <AboutUsCard
            title="Integrity"
            description="We operate with honesty and uphold the highest ethical standards."
            icon={<Globe />}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;