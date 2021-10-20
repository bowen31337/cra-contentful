export interface ListProps {
  category: string;
}

export interface ListDataResponseProps {
  propertyCollection: { items: ListItem[] };
}

export interface ListItem {
  category: string;
  title: string;
  address: string;
  id: string;
  image: {
    url: string;
  };
}
