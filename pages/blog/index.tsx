import Link from 'next/link';
import { useState } from 'react';
import { getPosts } from '../../lib';
import { Post } from '../../lib/types';
import styles from '../../styles/blog.module.css';

const Blog = ({ posts }: { posts: Post[] }) => {
  const [search, setSearch] = useState<string>('');

  const postFiltered = posts.filter((post) => {
    return search.toLocaleLowerCase() === ''
      ? post
      : post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div>
      <h1>Blog</h1>
      <div>
        <input
          type="search"
          id="search"
          placeholder="Search…"
          autoComplete="off"
          className={styles.inputSearch}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <section>
        <ol className={styles.postList}>
          {postFiltered.map((post) => (
            <li className={styles.postItem} key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <div className={styles.postDescription}>
                  <span>{post.description} - </span>
                  <span className={styles.postDate}>
                    {new Date(post.date).toLocaleString('en-US', {
                      month: 'short',
                      day: '2-digit',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

export default Blog;
