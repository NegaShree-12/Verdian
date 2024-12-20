import React from "react";
import { Box, Typography,Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Import Material UI Arrow icon
import gradient from "../assets/images/gradiant.png";
import gradient1 from "../assets/images/gradiant1.png";

const ContactUs = () => {
  return (
    <Box
      id="contact-us"
      sx={{
        position: "relative", // Set relative position for proper absolute positioning of the images
        backgroundColor: "#009065", // Outer green background
        textAlign: "center",
        py: 6, // Padding Top and Bottom
        px: 2, // Padding Left and Right
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        width: "100%",
        maxWidth: "1350px",
        mx: "auto", // Center horizontally
        overflow: "hidden", // Ensure no content overflows the container
      }}
    >
      {/* Gradient Image on the Left */}
      <Box
        component="img"
        src={gradient} // Use the imported gradient image
        alt="Gradient Left"
        sx={{
          position: "absolute",
          top: "50%", // Vertically center the image
          left: 0, // Align it to the left
          transform: "translateY(-50%)", // Center it vertically
          height: "100%", // Make it span the height of the Box
          zIndex: 0, // Place it behind the content
          opacity: 0.7, // Slight transparency for merging
          mixBlendMode: "multiply", // Blend with the background color
        }}
      />

      {/* Gradient Image on the Right */}
      <Box
        component="img"
        src={gradient1} // Use the imported gradient1 image
        alt="Gradient Right"
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          height: "100%",
          zIndex: 0,
          opacity: 0.7,
          mixBlendMode: "multiply",
        }}
      />

      {/* Content Box */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          Contact Us
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "1.5rem",
            color: "#E5E7EB",
          }}
        >
          Have questions or need more information? Reach out to us at.
        </Typography>

        <Box
          sx={{
            backgroundColor: "#065F46",
            borderRadius: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "fit-content",
            mx: "auto",
            py: 1,
            px: 1.5,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#FACC15",
              padding: "0.25rem 0.75rem",
              color: "#000",
              fontWeight: "700",
              fontSize: "0.75rem",
            }}
          >
            MAIL TO
          </Box>

          <Box
            sx={{
              padding: "0.25rem 1rem",
              color: "#FFFFFF",
              fontWeight: "600",
              fontSize: "0.875rem",
              backgroundColor: "#065F46",
            }}
          >
            info@veridian.com
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.75rem",
              backgroundColor: "#064E3B",
              height: "100%",
              width: "fit-content",
              marginTop: "-15px",
              marginRight: "-15px",
              marginBottom: "-15px",
            }}
          >
            <ArrowForwardIcon sx={{ color: "#FFFFFF", fontSize: "1.25rem" }} />
            
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{
            marginTop: "1rem",
            color: "#E5E7EB",
            fontSize: "0.875rem",
          }}
        >
          'We’re here to help!'
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactUs;
