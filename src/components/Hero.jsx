import React from "react";
import { Box, Typography } from "@mui/material";
import Rectangle from "./Svgcomponent/rectangle";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "90vh", md: "70vh" },
        backgroundColor: "#009065",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
        padding: { xs: "5rem 1.5rem", md: "5rem" },
      }}
    >
      {/* Rectangles */}
      {Array.from({ length: 4 }).map((_, index) => {
        const isSecondRow = index > 1;
        const isLeftSide = index % 2 === 0;

        return (
          <Box
            key={index}
            sx={{
              position: "absolute",
              width: "150px",
              height: "300px",
              top: isSecondRow ? "200px" : "-60px",
              left: isLeftSide
                ? isSecondRow
                  ? "-30px"
                  : "50px"
                : isSecondRow
                ? `calc(100% - 140px)`
                : `calc(100% - 200px)`,
              transform: isLeftSide ? "rotate(-45deg)" : "rotate(45deg)",
              opacity: 1,
              zIndex: 1,
            }}
          >
            <Rectangle />
          </Box>
        );
      })}

      {/* Typography Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          marginTop: { xs: "3rem", md: "0" }, // Adjust typography position on smaller screens
        }}
      >
        <Typography
          variant="h6"
          sx={{
            backgroundColor: "#F9C74F",
            color: "#00563B",
            display: "inline-block",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            textTransform: "uppercase",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Investment Management
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            marginBottom: "1.5rem",
            lineHeight: { xs: "1.2", md: "1.5" },
          }}
        >
          Empowering Investments with Expertise and Strategy
        </Typography>
        <Typography
          variant="h6"
          sx={{
            borderRadius: "2px",
            backgroundColor: "#00563B",
            padding: "0.5rem 2rem",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          Know more ↴
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
