import { d as db, C as Comment } from '../../../chunks/_astro_db_COZSoCjb.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../../renderers.mjs';

const DELETE = async (ctx) => {
  const commentId = Number(ctx.params.id);
  await db.delete(Comment).where(eq(Comment.id, commentId));
  return new Response(null, { status: 204 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
