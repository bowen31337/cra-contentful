import { useList, ListProps, ListItem } from ".";
import { Card } from "../Card";
import "./List.styles.css";
import { CONSTANTS } from "../../utils";
import { useEffect, useState } from "react";

const constructQuery = (type: string, page: number = 1) => `
{
    dataset2Collection(limit: ${CONSTANTS.PAGE_SIZE}, skip: ${
  (page - 1) * CONSTANTS.PAGE_SIZE
}, where:{
      type: "${type}"
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

const List = (props: ListProps) => {
  const { type } = props;

  const { isLoading, errorMsg, data, fetchListData, page, setPage } = useList();

  const [results, setResults] = useState<ListItem[]>(data);

  const loadMore = () => {
    setPage((pre) => pre + 1);
  };

  useEffect(() => {
    fetchListData(constructQuery(type, page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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

export default List;
