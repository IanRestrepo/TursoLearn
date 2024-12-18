import { defineDb, defineTable, column } from 'astro:db';

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  }
});

const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }), // Asegúrate de que 'id' esté como clave primaria
    authorId: column.number({ references: () => Author.columns.id }),
    body: column.text(),
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Comment, Author }
});
