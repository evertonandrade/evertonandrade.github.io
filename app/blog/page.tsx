import { getPosts } from '@/lib/api';
import { PostList } from '@/components/post-list';

async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <h1>Blog</h1>
      <PostList posts={posts} />
    </>
  );
}

export default BlogPage;

export const revalidate = 60;
