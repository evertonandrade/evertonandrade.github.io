import { GetStaticProps, NextPage } from 'next/types';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/home.module.css';
import { Post, getPosts } from '../lib';

interface HomeProps {
  name: string;
  description: string;
  imageUrl: string;
  posts: Post[];
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  return (
    <>
      <main className={styles.mainContent}>
        <section className={styles.aboutSection}>
          <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
          </div>
          <Image
            src={props.imageUrl}
            alt="avatar"
            width={80}
            height={80}
            className={styles.avatarImage}
          />
        </section>
        <section>
          <h2 className={styles.heading}>Latest Posts</h2>
          <ol className={styles.posts}>
            {props.posts.map((post) => (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <div className={styles.postDescription}>
                  <p className={styles.postDate}>
                    {new Date(post.date).toLocaleString('en-US', {
                      month: 'short',
                      day: '2-digit',
                      year: 'numeric',
                    })}
                  </p>
                  <p>{post.description}</p>
                </div>
                <Link className={styles.link} href={`/blog/${post.slug}`}>
                  Read post →
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = await getPosts();
  return {
    props: {
      name: `Everton Andrade`,
      description: `Web developer, computer science degree and open source enthusiast.`,
      imageUrl: 'https://avatars.githubusercontent.com/u/43795982?v=4',
      posts,
    },
    revalidate: 1,
  };
};

export default Home;
