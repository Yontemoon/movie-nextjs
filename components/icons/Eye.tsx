import * as React from "react"
import { SVGProps } from "react"
const Eye = ({watched = false}, props: SVGProps<SVGSVGElement>) => (
  <svg
    className="hover:cursor-pointer"
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    fill={watched ? "#b22524":"currentColor"}
    viewBox="-2 -6 24 24"
    {...props}
  >
    <path d="M10 12c-5.042.007-10-2.686-10-6S4.984-.017 10 0c5.016.017 10 2.686 10 6s-4.958 5.993-10 6zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
  </svg>
)
export default Eye
