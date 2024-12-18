import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const db = await createRemoteDatabaseClient({
  dbType: "libsql",
  remoteUrl: "libsql://andromeda-ianrestrepo.turso.io",
  appToken: process.env.ASTRO_DB_APP_TOKEN
});
const Comment = asDrizzleTable("Comment", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Comment", "primaryKey": true } }, "authorId": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "authorId", "collection": "Comment", "primaryKey": false, "optional": false, "references": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Author", "primaryKey": true } } } }, "body": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "body", "collection": "Comment", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);
const Author = asDrizzleTable("Author", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Author", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Author", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

export { Author as A, Comment as C, db as d };
