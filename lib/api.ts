import { Post } from './types';

export async function getPosts(size: number | null = null): Promise<Post[]> {
  const response = await fetch('https://dev.to/api/articles/me/published', {
    headers: {
      'api-key': process.env.DEVTO_API_KEY,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  const posts = data
    .map((result: any) => {
      return {
        id: result.id,
        slug: result.slug,
        title: result.title,
        description: result.description,
        date: result.published_at,
      };
    })
    .sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return posts.slice(0, size ?? posts.length);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const response = await fetch(
    `https://dev.to/api/articles/evertonandrade/${slug}`,
    {
      headers: {
        'api-key': process.env.DEVTO_API_KEY,
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    description: data.description,
    date: data.published_at,
    contentMarkdown: data.body_markdown,
  };
}
