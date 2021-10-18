export interface HomeDataResponseProps {
  dataset2Collection: { items: PageItem[] };
}

export interface PageItem {
  title?: string;
  type?: string;
  id: string;
  image: {
    url: string;
  };
  [key: string]: unknown;
}
