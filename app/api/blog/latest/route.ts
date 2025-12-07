import { NextResponse } from "next/server";
import { getRecentPosts } from "@/lib/content/blog-loader";

export async function GET() {
  try {
    const posts = await getRecentPosts(3);

    const data = posts.map((post) => ({
      slug: post.slug,
      title: post.frontmatter.title,
      excerpt: post.frontmatter.description,
      date: post.frontmatter.date,
      author: post.frontmatter.author,
      cover: (post.frontmatter as any).cover || null,
      coverAlt: (post.frontmatter as any).cover_alt || post.frontmatter.title,
    }));

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("[API] Error loading latest blog posts", error);
    return NextResponse.json({ error: "Failed to load latest posts" }, { status: 500 });
  }
}
