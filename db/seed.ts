import { Clients, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Clients).values([
		{ id: 1, name: "Kasim", age: 30, isActive: true },
		{ id: 2, name: "Jose", age: 31, isActive: true },
		{ id: 3, name: "John", age: 32, isActive: true },
		{ id: 4, name: "Jane", age: 33, isActive: false },
		{ id: 5, name: "Bob", age: 34, isActive: true },
	  ]);

	console.log('Seeding database...');
}
