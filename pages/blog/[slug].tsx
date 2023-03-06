/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getBlocks, getPage, getPaths } from '../../lib';
import styles from '../../styles/post.module.css';
import { Fragment } from 'react';
import Text from '../../components/text';
import { useEffect } from 'react';
import hljs from 'highlight.js';

interface PostProps {
  page: any;
  blocks: any[];
}

export default function Post({ page, blocks }: PostProps) {
  useEffect(() => {
    hljs.highlightAll();
  });
  if (!page || !blocks) {
    return <div />;
  }
  return (
    <div>
      <Head>
        <title>{page.properties.name.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className={styles.articleContainer}>
        <h1 className={styles.name}>
          <Text text={page.properties.name.title} />
        </h1>
        <section>
          {blocks.map((block: any) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
          <Link href="/" className={styles.back}>
            ← Go home
          </Link>
        </section>
      </article>
    </div>
  );
}

const renderBlock = (block: any) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1>
          <Text text={value.rich_text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2>
          <Text text={value.rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3>
          <Text text={value.rich_text} />
        </h3>
      );
    case 'bulleted_list_item':
      return (
        <ul>
          <li key={value}>
            <Text text={value.rich_text} />
            {!!value.children && renderNestedList(block)}
          </li>
        </ul>
      );
    case 'numbered_list_item':
      return (
        <ol>
          <li key={value}>
            <Text text={value.rich_text} />
            {!!value.children && renderNestedList(block)}
          </li>
        </ol>
      );
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} checked={value.checked} readOnly />{' '}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {value.children?.map((block: any) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case 'child_page':
      return <p>{value.title}</p>;
    case 'image':
      const src =
        value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case 'divider':
      return <hr key={id} />;
    case 'quote':
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
    case 'code':
      return (
        <pre className={styles.pre}>
          <code className={`language-${value.language}`} key={id}>
            {value.rich_text[0].plain_text}
          </code>
        </pre>
      );
    case 'file':
      const src_file =
        value.type === 'external' ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split('/');
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const captionFile = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure>
          <div className={styles.file}>
            📎{' '}
            <Link href={src_file} passHref>
              {lastElementInArray.split('?')[0]}
            </Link>
          </div>
          {captionFile && <figcaption>{captionFile}</figcaption>}
        </figure>
      );
    case 'bookmark':
      const href = value.url;
      return (
        <a href={href} target="_brank" className={styles.bookmark}>
          {href}
        </a>
      );
    default:
      return `❌ Unsupported block (${
        type === 'unsupported' ? 'unsupported by Notion API' : type
      })`;
  }
};

const renderNestedList = (block: any) => {
  const value = block[block.type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === 'numbered_list_item';

  if (isNumberedList) {
    return <ol>{value.children.map((block: any) => renderBlock(block))}</ol>;
  } else {
    return <ul>{value.children.map((block: any) => renderBlock(block))}</ul>;
  }
};

export const getStaticPaths = async () => {
  const paths = await getPaths();
  return {
    paths,
    fallback: true,
  };
};

interface PageParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps = async (
  context: GetStaticPropsContext<PageParams>
): Promise<GetStaticPropsResult<PostProps>> => {
  const { slug } = context.params!;
  const page = await getPage(slug);
  if (!('properties' in page) || !('title' in page.properties.name)) {
    throw new Error('Invalid Page');
  }
  const blocks = await getBlocks(page.id);
  const childBlocks = await Promise.all(
    blocks
      .filter((block: any) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block: any) => {
    if (block.has_children && !block[block.type].children) {
      block[block.type]['children'] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
  };
};
