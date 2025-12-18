export type JournalAuthor = {
  name: string;
};

export type JournalImage = {
  url: string;
  altText?: string | null;
};

export type JournalArticle = {
  handle: string;
  title: string;
  excerpt: string;
  bodyHtml: string;
  publishedAt: string;
  tags: string[];
  image?: JournalImage | null;
  author?: JournalAuthor | null;
};
