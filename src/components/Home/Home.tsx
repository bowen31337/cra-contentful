import { Award } from "../Award";
import { Filter } from "../Filter";
import { Footer } from "../Footer";
import { Header } from "../Header";
const Home = () => {
  return (
    <>
      <Header/>
      <main>
        <Filter />
        <Award/>
        <Footer/>
      </main>
    </>
    
  );
};
export default Home;
