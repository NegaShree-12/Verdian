import * as React from "react"
const Rectangle3 = (props) => (  
    <svg  
     xmlns="http://www.w3.org/2000/svg"  
     width={props.width}  
     height={props.height}  
     fill="none"  
     {...props}  
    >  
     <path  
      fill="url(#a)"  
      d="M0 0h140.892v1200.17H0z"  
      transform="matrix(.70657 -.70765 -.70656 -.70765 848.418 826.26)"  
     />  
     <defs>  
      <linearGradient  
        id="a"  
        x1={70.446}  
        x2={70.446}  
        y1={0}  
        y2={1200.17}  
        gradientUnits="userSpaceOnUse"  
      >  
        <stop stopColor="#00906D" stopOpacity={0.35} />  
        <stop offset={1} stopColor="#00906D" stopOpacity={0} />  
      </linearGradient>  
     </defs>  
    </svg>  
  )
export default Rectangle3
