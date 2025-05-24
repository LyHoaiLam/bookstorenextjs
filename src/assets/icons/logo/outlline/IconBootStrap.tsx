import * as React from 'react';
import { SVGProps } from 'react';

const IconBootStrap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="100"
    height="100"
    {...props}
  >
    <defs>
      <linearGradient id="gradientPurple" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9013fe" />
        <stop offset="100%" stopColor="#6610f2" />
      </linearGradient>
    </defs>
    <rect width="128" height="128" rx="20" fill="url(#gradientPurple)" />
    <path
      fill="#fff"
      d="M85.2 66.6c3.9-2.1 6.5-5.9 6.5-11.3 0-9.4-7.5-14.9-19.9-14.9H41v52h33.1c13.4 0 21.3-6.6 21.3-17.5 0-6.5-3.3-11.1-10.2-13.3zM52.6 49.7h16.5c5.8 0 9.2 2.5 9.2 7.1 0 5-3.6 7.5-9.8 7.5H52.6V49.7zm16.6 32.6H52.6V67.6h16.9c7 0 10.8 2.6 10.8 7.4 0 5.2-3.6 7.3-10.8 7.3z"
    />
  </svg>
)
export default React.memo(IconBootStrap)
