import { getPosts } from '@/lib/api';
import { PostList } from '@/components/post-list';

async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <h2>Posts</h2>
      <PostList posts={posts} />
    </>
  );
}

export default BlogPage;

export const revalidate = 60;
