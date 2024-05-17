'use client';

import { Flex } from '@mantine/core';
import React, { useState } from 'react';
import StarButton from '../StarButton/StarButton';

type RatingInputProps = {
	maxRating?: number,
	rating: number,
	setRating: (newRating : number) => void,
};

export default function RatingInput({ maxRating = 10, rating, setRating }:RatingInputProps) {
	const [currentRating, setCurrentRating] = useState<number | null>(rating);
	function renderInputs(maxNumber : number) {
		const res : React.JSX.Element[] = [];
		for (let i = 1; i < maxNumber; i++) {
			res.push(
				<StarButton
					buttonActive={currentRating ? i <= currentRating : i <= rating}
					onMouseOver={() => setCurrentRating(i)}
					onClick={() => setRating(i)}
					key={i}
					/>
			);
		}
		return res;
	}

	return (
		<Flex justify="space-between" w="100%" onMouseLeave={() => setCurrentRating(null)}>
			{
				renderInputs(maxRating)
			}
		</Flex>
	);
}
