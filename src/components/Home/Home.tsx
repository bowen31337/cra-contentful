import { Award } from "../Award";
import { Filter } from "../Filter";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Hero } from "../Hero";
const Home = () => {
  return (
    <>
      <Header/>
      <main>
        <Header/>
        <Hero/>
        {/* <Filter /> */}
        <Award/>
        <Footer/>
      </main>
    </>
    
  );
};
export default Home;
