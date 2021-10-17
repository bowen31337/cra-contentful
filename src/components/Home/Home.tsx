import { useHome } from ".";

const query = `
{
    javascriptTutorialCollection {
        items {
            title
        }
    }
}  
`;
const Home = () => {
  const { isLoading , errorMsg, data } = useHome(query);

  if(isLoading) {
      return <p>Loading...</p>;
  }

  if( errorMsg !== '') {
      return <p>Oops, error!</p>
  }

  return (<h1>{data.title}</h1>)
};
export default Home;
