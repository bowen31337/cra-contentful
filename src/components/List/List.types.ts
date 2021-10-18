export interface ListProps {
  type: string;
}

export interface ListDataResponseProps {
  dataset2Collection: { items: ListItem[] };
}

export interface ListItem {
  type: string;
  title: string;
  description: string;
  id: string;
  image: {
    url: string;
  };
}
