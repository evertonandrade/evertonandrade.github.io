import { GoBack } from '@/components/go-back';
import { getPostBySlug, getPosts } from '@/lib/api';
import { markdownToHtml } from '@/lib/utils';
import styles from '@/styles/post.module.css';

export const generateStaticParams = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

interface PostProps {
  params: {
    slug: string;
  };
}

async function Post(props: PostProps) {
  const post = await getPostBySlug(props.params.slug);
  const contentHtml = await markdownToHtml(post.contentMarkdown!);

  return (
    <article className={styles.articleContainer}>
      <h1 className={styles.name}>{post.title}</h1>
      <section>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <GoBack />
      </section>
    </article>
  );
}

export default Post;
