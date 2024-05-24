'use client';

import Image, { ImageProps } from 'next/image';
import React, { useState } from 'react';
import { Container } from '@mantine/core';
import NoPoster from '../NoPoster/NoPoster';

export default function ImageWithFallback(props : ImageProps) {
	const [errored, setErrored] = useState(false);
	const variant = (+(props.height ?? 101)) > 100 ? 'md' : 'sm';
	return (
		<>
			{props.src === '' || errored ?
				<Container px={0} m={0} w={props.width} h={props.height} style={{ flexShrink: 0 }}>
					<NoPoster variant={variant} />
				</Container>
				:
				<Image {...props} onError={() => setErrored(true)} />
			}
		</>
	);
}
