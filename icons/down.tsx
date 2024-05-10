import { SVGProps } from 'react';

export default function DownIconSvg(props:SVGProps<SVGSVGElement>) {
  return (
    <svg
		width={16}
		height={16}
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="#ACADB9"
		{...props}
    >
      <path
        d="M3.333 6L7.48 9.554a.8.8 0 001.042 0L12.667 6"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}
