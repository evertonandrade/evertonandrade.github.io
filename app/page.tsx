import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '@/lib/api';
import { formattedDate } from '@/lib/utils';
import { siteConfig } from '@/lib/constants';
import styles from '../styles/home.module.css';

async function HomePage() {
  const posts = await getPosts();

  return (
    <>
      <section className={styles.aboutSection}>
        <div>
          <h2>{siteConfig.name}</h2>
          <p>{siteConfig.description}</p>
        </div>
        <Image
          src={siteConfig.avatarUrl}
          alt="avatar"
          width={80}
          height={80}
          className={styles.avatarImage}
        />
      </section>
      <section>
        <h2 className={styles.heading}>Latest Posts</h2>
        <ol className={styles.posts}>
          {posts.map((post) => (
            <li key={post.id} className={styles.post}>
              <Link href={`/blog/${post.slug}`}>
                <h3 className={styles.postTitle}>{post.title}</h3>
              </Link>
              <div className={styles.postDescription}>
                <p className={styles.postDate}>{formattedDate(post.date)}</p>
                <p>{post.description}</p>
              </div>
              <Link className={styles.link} href={`/blog/${post.slug}`}>
                Read post →
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

export default HomePage;

export const revalidate = 60;
