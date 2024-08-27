import BestSeller from "../compenents/BestSeller";
import Hero from "../compenents/Hero";
import LatestCollection from "../compenents/LatestCollection";
import NewsLatterBox from "../compenents/NewsLatterBox";
import OurPolice from "../compenents/OurPolice";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolice />
      <NewsLatterBox />
    </div>
  );
};

export default Home;
