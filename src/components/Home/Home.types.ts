export interface HomeDataResponseProps {
  javascriptTutorialCollection: { items: PageItem[] };
}

export interface PageItem {
  title?: string;
  [key: string]: unknown;
}
