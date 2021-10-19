import { useEffect, useState } from "react";
import { Card } from "../Card";
import { CONSTANTS } from "../../utils";
import { SearchListProps, useSearch } from "./";
import { ListItem } from "../List";
const constructQuery = (query: string, page: number = 1) => `
{
    dataset2Collection(limit: ${CONSTANTS.PAGE_SIZE}, skip: ${
  (page - 1) * CONSTANTS.PAGE_SIZE
}, where:{
      OR: [
          {description_contains: "${query}" },
          {title_contains: "${query}" }
      ]
    }) {
      items{
        type,
        title,
        description,
        id,
        image {
         url
        }
      }
    }
  }
`;

const SearchList = (props: SearchListProps) => {
  const { query } = props;

  const { isLoading, errorMsg, data, search, page, setPage } = useSearch();

  const [results, setResults] = useState<ListItem[]>(data);

  const loadMore = () => {
    setPage((pre) => pre + 1);
  };

  useEffect(() => {
    search(constructQuery(query, page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setResults([]);
    search(constructQuery(query, 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (data.length > 0) {
      setResults((pre) => [...pre, ...data]);
    }
  }, [data]);

  return (
    <section className="list-wrapper">
      <ul>
        {results.map(({ id, ...other }) => (
          <li key={id}>
            <Card
              description={other.description}
              id={id}
              title={other.title}
              url={
                other.image
                  ? other.image.url
                  : "http://lorempixel.com/400/200/sports/1/"
              }
            />
          </li>
        ))}
      </ul>

      {isLoading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>no more data found</p>
      ) : (
        <button onClick={loadMore}>Load more</button>
      )}
      {errorMsg !== "" && <p>{errorMsg}</p>}
    </section>
  );
};

export default SearchList;
