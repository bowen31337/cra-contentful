import { useList, ListProps, ListItem, ListStyled } from ".";
import { Card } from "../Card";
import { CONSTANTS } from "../../utils";
import { useEffect, useState } from "react";

const constructQuery = (category: string, page: number = 1) => `
{
   propertyCollection(limit: ${CONSTANTS.PAGE_SIZE}, skip: ${
  (page - 1) * CONSTANTS.PAGE_SIZE
}, where:{
      category_contains: "${category}"
    }) {
      items{
        category,
        title,
        address,
        id,
        image {
         url
        }
      }
    }
  }
`;

const List = (props: ListProps) => {
  const { category } = props;

  const { isLoading, errorMsg, data, fetchListData, page, setPage } = useList();

  const [results, setResults] = useState<ListItem[]>(data);

  const loadMore = () => {
    setPage((pre) => pre + 1);
  };

  useEffect(() => {
    setResults([]);
    fetchListData(constructQuery(category, 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    if (page > 1) {
      fetchListData(constructQuery(category, page));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (data.length > 0) {
      setResults((pre) => [...pre, ...data]);
    }
  }, [data]);

  return (
    <section className="list-wrapper">
      <ListStyled>
        {results.map(({ id, ...other }) => (
          <li key={`${id}`}>
            <Card
              address={other.address}
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
      </ListStyled>

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
