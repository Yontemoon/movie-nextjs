import * as React from "react"
import { SVGProps } from "react"
const Heart = ({watched = false}, props: SVGProps<SVGSVGElement>) => (
  <svg
    className="hover:cursor-pointer"
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    fill={watched ? "#14c78f" : "currentColor"}
    viewBox="-2 -4 24 24"
    {...props}
  >
    <path d="m9.293 1.55.707.708.707-.707a5 5 0 1 1 7.071 7.071l-7.07 7.071a1 1 0 0 1-1.415 0L2.222 8.622a5 5 0 1 1 7.07-7.071z" />
  </svg>
)
export default Heart

