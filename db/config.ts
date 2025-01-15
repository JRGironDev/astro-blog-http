import { column, defineDb, defineTable } from 'astro:db';

// Define your tables and their schema here.
// Read more: https://astro.build/db

const Clients = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    name: column.text(),
    age: column.number(),
    isActive: column.boolean()          
  }
});


// https://astro.build/db/config
export default defineDb({
  tables: {
    Clients
  }
});
