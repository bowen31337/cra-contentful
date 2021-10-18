import { useList, ListProps } from ".";
import {Card} from '../Card'
import './List.styles.css';

const constructQuery = (type: string) => `
{
    dataset2Collection(where:{
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

  const { isLoading, errorMsg, data } = useList(constructQuery(type));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorMsg !== "") {
    return <p>{errorMsg}</p>;
  }

  if (data.length === 0) {
    return <h1>No Data Found.</h1>;
  }

  return (
    <ul>
      {data.map(({ id, ...other }) => (
        <li key={id}><Card description={other.description} id={id} title={other.title} url={other.image? other.image.url : 'http://lorempixel.com/400/200/sports/1/'} /></li>
      ))}
    </ul>
  );
};

export default List;
