import * as React from "react";
import { SVGProps } from "react";

const IconPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#clip0_3045_28181)">
      <path fill={props.color || '#777E90'}
        d="M21.1779 19.4484L19.3117 21.3146C19.3117 21.3146 14.4626 23.3928 7.53538 16.4656C0.608109 9.53829 2.68629 4.6892 2.68629 4.6892L4.55248 2.82301C5.3956 1.97989 6.78999 2.07899 7.5054 3.03286L9.28669 5.40793C9.87173 6.18797 9.79416 7.2795 9.10468 7.96897L7.53538 9.53828C7.53538 9.53828 7.53538 10.9237 10.3063 13.6946C13.0772 16.4656 14.4626 16.4656 14.4626 16.4656L16.032 14.8962C16.7214 14.2068 17.813 14.1292 18.593 14.7142L20.9681 16.4955C21.9219 17.2109 22.021 18.6053 21.1779 19.4484Z"
        />
    </g>
    <defs>
      <clipPath id="clip0_3045_28181">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconPhone
