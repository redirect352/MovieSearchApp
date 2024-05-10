import * as React from 'react';
import { SVGProps } from 'react';

const CloseSvgIcon = (props:SVGProps<SVGSVGElement>) => (
	<svg
	xmlns="http://www.w3.org/2000/svg"
	width={16}
	height={16}
	strokeWidth={1.5}
	fill="none"
	{...props}
	>
	<g
		strokeLinecap="round"
		strokeLinejoin="round"
		clipPath="url(#a)"
		>
			<path d="m12 4-8 8M4 4l8 8" />
	</g>
		<defs>
			<clipPath id="a">
				<path fill="none" d="M0 0h16v16H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default CloseSvgIcon;
