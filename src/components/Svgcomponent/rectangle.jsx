import * as React from "react";

const Rectangle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="130" // Adjusted width
    height="400" // Adjusted height for bands
    fill="none"
    {...props}
  >
    <defs>
      <linearGradient
        id="gradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#0B0B0B" stopOpacity={0.15} /> {/* Subtle Opacity */}
        <stop offset="100%" stopColor="#0B0B0B" stopOpacity={0} />
      </linearGradient>
    </defs>
    <rect
      width="100%"
      height="100%"
      fill="url(#gradient)"
    />
  </svg>
);

export default Rectangle;
