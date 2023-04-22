import { siteConfig } from './constants';

export type Post = {
  id: string;
  slug: string;
  date: string;
  title: string;
  description: string;
  contentMarkdown?: string;
};

export type SiteConfig = typeof siteConfig;
