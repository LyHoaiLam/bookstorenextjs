import * as React from 'react';
import { SVGProps } from 'react';

const IconAngularJS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Angular"
    role="img"
    height="100px"
    width="100px"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect width="512" height="512" rx="15%" fill="#ffffff" />
    <defs>
      <path id="a" d="M256 65v42l111 249h-42l-22-55h-47v146l151-84 27-235-178-63zm0 123v78h33l-33-78z" />
    </defs>
    <use href="#a" fill="#c3002f" />
    <use href="#a" fill="#dd0031" transform="matrix(-1,0,0,1,512,0)" />
  </svg>
)
export default React.memo(IconAngularJS)
