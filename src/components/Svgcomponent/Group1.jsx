import * as React from "react";

const Group1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={470}
    height={540}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={470}
      height={540}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill={props.fill || "#006547"} d="M0 0h470v540H0V0Z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="url(#b)"
        d="M602.139-205h141v633.764h-141z"
        transform="rotate(45 602.139 -205)"
      />
      <path
        fill="url(#c)"
        d="M591.39 88h141v779.783h-141z"
        transform="rotate(45 591.39 88)"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={672.639}
        x2={672.639}
        y1={-205}
        y2={428.764}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={props.fill || "#0B0B0B"} stopOpacity={0.23} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={661.89}
        x2={661.89}
        y1={88}
        y2={867.783}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={props.fill || "#0B0B0B"} stopOpacity={0.23} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default Group1;
