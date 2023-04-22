import { remark } from 'remark';
import html from 'remark-html';

export const markdownToHtml = async (contentMarkdown: string) => {
  const processedContent = await remark().use(html).process(contentMarkdown);
  return processedContent.toString();
};

export const formattedDate = (date: string) => {
  return new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
};
