'use server';

import { revalidateTag } from 'next/cache';
import fetch from 'node-fetch';

const apiBase = process.env.API_BASE;

export async function rateMovie(movieId : number, sessionId: string, formData: FormData) {
    const api_key = process.env.API_KEY;
	const res = await fetch(
		`${apiBase}/movie/${movieId}/rating?api_key=${api_key}&guest_session_id=${sessionId}`,
		{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        }
	);
    if (!res.ok) {
        throw await res.json();
    }
    revalidateTag('ratedMovies');
    return res.json();
}
export async function deleteRating(movieId : number, sessionId: string) {
    const api_key = process.env.API_KEY;
	const res = await fetch(
		`${apiBase}/movie/${movieId}/rating?api_key=${api_key}&guest_session_id=${sessionId}`,
		{
            method: 'DELETE',
        }
	);
    if (!res.ok) {
        throw await res.json();
    }
    revalidateTag('ratedMovies');
    return res.json();
}
