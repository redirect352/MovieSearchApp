'use client';

import React, { useContext, useState } from 'react';
import { Button, Flex, Modal, ModalProps, NumberInput, Title } from '@mantine/core';
import classes from './styles.module.scss';
import { RatingInput } from '@/UI';
import { deleteRating, rateMovie } from '@/actions/rateMovieActions';
import { SessionContext } from '@/components/Providers/providers';

export type MovieRatingModalProps = {
	movieTitle: string,
	movieId: number,
	startRating?:number,
} & ModalProps;

export default function MovieRatingModal({ movieTitle, movieId, startRating = 0, ...props }
	: MovieRatingModalProps) {
	const [rating, setRating] = useState(startRating);
	const sessionId = useContext(SessionContext);
	const rateMovieWithId = rateMovie.bind(null, movieId, sessionId);
	const deleteRatingWithId = deleteRating.bind(null, movieId, sessionId);
	return (
		<Modal.Root {...props} className={classes.modalBox}>
			<Modal.Overlay />
			<Modal.Content>
				<Modal.Header className={classes.headerSection}>
					<Modal.Title>Your rating</Modal.Title>
					<Modal.CloseButton />
				</Modal.Header>
				<Modal.Body p={0}>
					{/* action={rateMovieWithId} */}
					<form className={classes.contentSection}>
						<Title order={4}>
							{movieTitle}
						</Title>
						<RatingInput rating={rating} setRating={setRating} />
						<NumberInput value={rating} name="value" display="none" />
						<Flex gap={16} align="center">
							<Button size="md" onClick={() => props.onClose()} type="submit" formAction={rateMovieWithId}>
								Save
							</Button>
							<Button variant="transparent" type="submit" onClick={() => { setRating(0); props.onClose(); }} formAction={deleteRatingWithId}>
								remove rating
							</Button>
						</Flex>
					</form>
				</Modal.Body>
			</Modal.Content>
		</Modal.Root>
	);
}
