export type RestoryCase = {
  id: string;
  category: string;
  parentCategory: string;
  title: string;
  region: string;
  summary: string;
  customerWords: string;
  actualCause: string;
  solution: string;
  result: string;
  content: string;
  beforeImg: string;
  afterImg: string;
  blogUrl: string;
  date: string;
  tags: string[];
  seo: {
    title: string;
    description: string;
    slug: string;
    altText: string[];
  };
  reuse: {
    blog: string;
    shorts: string;
    faq: string[];
  };
};
