'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Post } from '@/lib/types';
import { formattedDate } from '@/lib/utils';
import styles from '@/styles/blog.module.css';

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  const [search, setSearch] = useState<string>('');

  const postFiltered = posts.filter((post) => {
    return search.toLocaleLowerCase() === ''
      ? post
      : post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <>
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
                    {formattedDate(post.date)}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};
