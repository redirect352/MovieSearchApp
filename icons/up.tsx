import { SVGProps } from 'react';

const UpIconSvg = (props:SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={6}
    fill="none"
	stroke="#ACADB9"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.667 5 6.52 1.446a.8.8 0 0 0-1.042 0L1.333 5"
    />
  </svg>
);

export default UpIconSvg;
