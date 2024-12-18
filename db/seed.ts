import { db, Comment, Author } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Author).values([
		{ id: 1, name: "Ian" },
		{ id: 2, name: "Restrepo" },
	]);

	await db.insert(Comment).values([
		{ authorId: 1, body: "Hola, como estas?" },
		{ authorId: 2, body: "Bien gracias, y tu?" },
	]);
}
