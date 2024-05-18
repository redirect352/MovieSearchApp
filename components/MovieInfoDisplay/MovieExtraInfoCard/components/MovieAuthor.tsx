import { Flex, Title } from '@mantine/core';
import React from 'react';
import { ImageWithFallback } from '@/UI';

export default function MovieAuthor({ title, imageSrc } : { title:string, imageSrc:string }) {
  return (
	<Flex gap={8} align="center">
		<ImageWithFallback width={40} height={40} src={imageSrc} alt="" />
		<Title order={4}>{title}</Title>
	</Flex>
  );
}
