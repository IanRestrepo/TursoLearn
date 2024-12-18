import type { APIRoute } from "astro";
import { db, Comment, eq } from 'astro:db';

export const DELETE: APIRoute = async (ctx) => {
  const commentId = Number(ctx.params.id);
  await db.delete(Comment).where(eq(Comment.id, commentId));
  return new Response(null, { status: 204 });
} 