import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import Material UI Arrow icon
import gradient from '../assets/images/gradiant.png';
import gradient1 from '../assets/images/gradiant1.png';

const ContactUs = () => {
  return (
    <Box
      id="contact-us"
      sx={{
        position: 'relative', // Set relative position for proper absolute positioning of the images
        backgroundColor: '#009065', // Outer green background
        textAlign: 'center',
        py: 6, // Padding Top and Bottom
        px: 2, // Padding Left and Right
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        width: '100%',
        maxWidth: '1350px',
        mx: 'auto', // Center horizontally
        overflow: 'hidden', // Ensure no content overflows the container
      }}
    >
      {/* Gradient Image on the Left */}
      <Box
        component="img"
        src={gradient} // Use the imported gradient image
        alt="Gradient Left"
        sx={{
          position: 'absolute',
          top: '50%', // Vertically center the image
          left: 0, // Align it to the left
          transform: 'translateY(-50%)', // Center it vertically
          height: '100%', // Make it span the height of the Box
          zIndex: 0, // Place it behind the content
          opacity: 0.7, // Slight transparency for merging
          mixBlendMode: 'multiply', // Blend with the background color
        }}
      />

      {/* Gradient Image on the Right */}
      <Box
        component="img"
        src={gradient1} // Use the imported gradient1 image
        alt="Gradient Right"
        sx={{
          position: 'absolute',
          top: '50%', // Vertically center the image
          right: 0, // Align it to the right
          transform: 'translateY(-50%)', // Center it vertically
          height: '100%', // Make it span the height of the Box
          zIndex: 0, // Place it behind the content
          opacity: 0.7, // Slight transparency for merging
          mixBlendMode: 'multiply', // Blend with the background color
        }}
      />

      {/* Content Box */}
      <Box
        sx={{
          position: 'relative', // Ensure the content is above the images
          zIndex: 1,
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: '600',
            marginBottom: '1rem',
          }}
        >
          Contact Us
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            marginBottom: '1.5rem',
            color: '#E5E7EB',
          }}
        >
          Have questions or need more information? Reach out to us at.
        </Typography>

        {/* Inner Green Box */}
        <Box
          sx={{
            backgroundColor: '#065F46', // Inner green background
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'fit-content',
            mx: 'auto', // Center horizontally
            py: 1, // Padding inside the inner box
            px: 1.5,
          }}
        >
          {/* Yellow MAIL TO Box */}
          <Box
            sx={{
              backgroundColor: '#FACC15', // Yellow background
              padding: '0.25rem 0.75rem',
              color: '#000',
              fontWeight: '700',
              fontSize: '0.75rem',
            }}
          >
            MAIL TO
          </Box>

          {/* Email Text */}
          <Box
            sx={{
              padding: '0.25rem 1rem',
              color: '#FFFFFF',
              fontWeight: '600',
              fontSize: '0.875rem',
              backgroundColor: '#065F46', // Match inner green box
            }}
          >
            info@veridian.com
          </Box>

          {/* Arrow Box */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.25rem', // Padding around the icon
              backgroundColor: '#064E3B', // Darker green shade
              height: '100%', // Ensures it matches the height of the text box
              width: 'fit-content', // Ensures it doesn't stretch beyond content
            }}
          >
            <ArrowForwardIcon sx={{ color: '#FFFFFF', fontSize: '1.25rem' }} />
          </Box>
        </Box>

        {/* Footer Text */}
        <Typography
          variant="body2"
          sx={{
            marginTop: '1rem',
            color: '#E5E7EB',
            fontSize: '0.875rem',
          }}
        >
          'We’re here to help!'
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactUs;
