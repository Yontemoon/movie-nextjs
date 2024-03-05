import * as React from "react"
import { SVGProps } from "react"
const Ellipsis = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    fill="currentColor"
    viewBox="-2 -9 24 24"
    {...props}
  >
    <path d="M3 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm14 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-7 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </svg>
)
export default Ellipsis
