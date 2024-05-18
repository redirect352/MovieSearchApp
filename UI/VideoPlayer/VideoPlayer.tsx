'use client';

import { Flex, Loader } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';

export type VideoPlayerProps = {
	width? : number | string,
	height? : number | string,
	src?: string,
	title: string
};

export default function VideoPlayer(props:VideoPlayerProps) {
	const [load, setLoad] = useState(false);
	const videoRef = useRef(null);
	const { title, src, width, height } = props;

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			setLoad(true);
			observer.disconnect();
		}
		});
		if (videoRef.current) observer.observe(videoRef.current);

		return () => {
			if (videoRef.current) {
				observer.unobserve(videoRef.current);
			}
		};
	}, []);

	return (
		<Flex w={width} h={height} ref={videoRef} align="center" justify="center">
		{load ? (
			<iframe
				width="100%"
				height="100%"
				src={src}
				title={title}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			>
			</iframe>
		) : (
			<Loader />
		)}
		</Flex>
	);
	// return (
	// 	<Suspense fallback={<p>Loading video...</p>}>
	// 		<iframe
	// 			width={width}
	// 			height={height}
	// 			src={src}
	// 			title={title}
	// 			frameBorder={0}
	// 			/>
	// 	</Suspense>
	// );
}
