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
      return <p>{errorMsg}</p>
  }

  if(data.length === 0) {
      return <h1>No Data Found.</h1>
  }

  return (<h1>{data[0]?.title}</h1>)
};
export default Home;
