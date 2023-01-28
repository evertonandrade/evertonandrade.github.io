import { Client } from '@notionhq/client';
import { Post } from './types';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const PostStatus = {
  NOT_STARTED: 'not started',
  IN_PROGRESS: 'in progress',
  DONE: 'done',
};

async function getDatabase() {
  const database = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: 'status',
      status: {
        equals: PostStatus.DONE,
      },
    },
  });

  return database;
}

export async function getPosts(): Promise<Post[]> {
  const database = await getDatabase();
  const posts = database.results.map((result) => {
    // TS type guards
    if (
      !('properties' in result) ||
      !('rich_text' in result.properties.slug) ||
      !('title' in result.properties.page) ||
      !('rich_text' in result.properties.description) ||
      !(
        'date' in result.properties.publishedAt &&
        result.properties.publishedAt.date != null
      )
    )
      throw new Error('Invalid Notion Database');

    return {
      id: result.id,
      slug: result.properties.slug.rich_text[0].plain_text,
      title: result.properties.page.title[0].plain_text,
      description: result.properties.description.rich_text[0].plain_text,
      date: result.properties.publishedAt.date.start,
    };
  });

  return posts;
}

export async function getPaths() {
  const database = await getDatabase();
  const paths = database.results.map((result) => {
    // TS type guards
    if (!('properties' in result) || !('rich_text' in result.properties.slug))
      throw new Error('Invalid Notion Database');

    return {
      params: {
        id: result.id,
        slug: result.properties.slug.rich_text[0].plain_text,
      },
    };
  });

  return paths;
}
