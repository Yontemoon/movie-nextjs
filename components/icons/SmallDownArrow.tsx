import * as React from "react"
import { SVGProps } from "react"
const SmallDownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    fill="currentColor"
    viewBox="-5 -8 24 24"
    {...props}
  >
    <path d="m7.071 5.314 4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z" />
  </svg>
)
export default SmallDownArrow
