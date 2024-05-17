'use client';

import React, { useState } from 'react';
import { Button, Flex, Modal, ModalProps, Title } from '@mantine/core';
import classes from './styles.module.scss';
import { RatingInput } from '@/UI';

export type MovieRatingModalProps = {
	movieTitle: string,
} & ModalProps;

export default function MovieRatingModal({ movieTitle, ...props } : MovieRatingModalProps) {
	const [rating, setRating] = useState(0);
	return (
		<Modal.Root {...props} className={classes.modalBox}>
			<Modal.Overlay />
			<Modal.Content>
				<Modal.Header className={classes.headerSection}>
					<Modal.Title>Your rating</Modal.Title>
					<Modal.CloseButton />
				</Modal.Header>
				<Modal.Body className={classes.contentSection}>
					<Title order={4}>
						{movieTitle}
					</Title>
						<RatingInput rating={rating} setRating={setRating} />
						<Flex gap={16} align="center">
							<Button size="md" onClick={() => props.onClose()}>
								Save
							</Button>
							<Button variant="transparent" onClick={() => setRating(0)}>
								remove rating
							</Button>
						</Flex>
				</Modal.Body>
			</Modal.Content>
		</Modal.Root>
	);
}
