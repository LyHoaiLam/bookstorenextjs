import * as React from 'react';
import { SVGProps } from 'react';

const IconPython = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="100px"
    height="100px"
    {...props}
  >
    <rect width="512" height="512" rx="15%" fill="#ffffff" />
    <path
      fill="#5a9fd4"
      d="M254 64c-16 0-31 1-44 4-39 7-46 21-46 47v35h92v12H130
      c-27 0-50 16-58 46-8 35-8 57 0 93 7 28 23 47 49 47h32v-42
      c0-30 26-57 57-57h91c26 0 46-21 46-46v-88c0-24-21-43-46-47
      -15-3-32-4-47-4z"
    />
    <circle fill="#ffffff" cx="204" cy="110" r="17" />
    <path
      fill="#ffd43b"
      transform="rotate(180,256,256)"
      d="M254 64c-16 0-31 1-44 4-39 7-46 21-46 47v35h92v12H130
      c-27 0-50 16-58 46-8 35-8 57 0 93 7 28 23 47 49 47h32v-42
      c0-30 26-57 57-57h91c26 0 46-21 46-46v-88c0-24-21-43-46-47
      -15-3-32-4-47-4z"
    />
    <circle fill="#ffffff" cx="308" cy="402" r="17" />
  </svg>
);

export default React.memo(IconPython);
