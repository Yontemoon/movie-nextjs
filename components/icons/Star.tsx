import * as React from "react"
import { SVGProps } from "react"
const Star = ({watched = false}, props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    fill={ watched ? "#FA9F42":"currentColor"}
    viewBox="-2 -2 24 24"
    {...props}
  >
    <path d="m10 16.379-6.173 3.245 1.179-6.874L.01 7.882l6.902-1.003L10 .624l3.087 6.255 6.902 1.003-4.995 4.868 1.18 6.874z" />
  </svg>
)
export default Star