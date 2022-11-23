import * as React from "react";
import { useState } from "react";

function ArrowLeftIcon(props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <svg
      width={props.size}
      height={props.size}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="transition duration-300"
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        fill={isHover ? "#E56137" : "#16263B"}
        stroke={isHover ? "#E56137" : "#FAFBFD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2602 15.5302L9.74023 12.0002L13.2602 8.47021"
        stroke="#FAFBFD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowLeftIcon;
