// Rectangle2.js  
import React from "react";  
  
const Rectangle2 = (props) => (  
  <svg  
   xmlns="http://www.w3.org/2000/svg"  
   width={props.width}  
   height={props.height}  
   fill="none"  
   {...props}  
  >  
   <rect  
    x="0"  
    y="0"  
    width="100%"  
    height="100%"  
    fill="url(#rectangle2-gradient)"  
    rx="10"  
   />  
   <defs>  
    <linearGradient  
      id="rectangle2-gradient"  
      x1="0"  
      x2="0"  
      y1="0"  
      y2="100%"  
      gradientUnits="userSpaceOnUse"  
    >  
      <stop stopColor="#CFE1DF" stopOpacity={1} /> {/* Lighter shade */}  
      <stop offset={1} stopColor="#A8C1BD" stopOpacity={1} /> {/* Darker shade */}  
    </linearGradient>  
   </defs>  
  </svg>  
);  
  
export default Rectangle2;
