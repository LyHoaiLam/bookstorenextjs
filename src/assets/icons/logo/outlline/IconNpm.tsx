import * as React from 'react';
import { SVGProps } from 'react';

const IconNpm = (props: SVGProps<SVGSVGElement>) => (
   <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 256 256"
        {...props}
    >
        <path fill="#C12127" d="M0 256V0h256v256z" />
        <path fill="#FFF" d="M48 48h160v160h-32V80h-48v128H48z" />
    </svg>
)
export default React.memo(IconNpm)
{/* <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" {...props}><path fill="#C12127" d="M0 256V0h256v256z"></path><path fill="#FFF" d="M48 48h160v160h-32V80h-48v128H48z"></path></svg> */}
 