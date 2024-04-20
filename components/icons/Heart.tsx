"use client"

import * as React from "react"
import { SVGProps, useState } from "react"
import { secondaryGreen, primaryGreen } from "@/library/primaryColors"

const Heart = ({watched = false, noEffect = false}, props: SVGProps<SVGSVGElement>) => {


  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
 return ( <svg
    className={` transition-all duration-500`}
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    fill={ noEffect ? primaryGreen : (watched ? isHovered ? secondaryGreen : primaryGreen : (isHovered ? primaryGreen : "white")) }
    viewBox="-2 -4 24 24"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    {...props}
  >
    <path d="m9.293 1.55.707.708.707-.707a5 5 0 1 1 7.071 7.071l-7.07 7.071a1 1 0 0 1-1.415 0L2.222 8.622a5 5 0 1 1 7.07-7.071z" />
  </svg>)
}
export default Heart

