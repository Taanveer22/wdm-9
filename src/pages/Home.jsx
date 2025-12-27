import Adventures from "../components/Adventures";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <div className="mb-8">
        <Banner></Banner>
      </div>
      <div className="mb-8">
        <Adventures></Adventures>
      </div>
    </div>
  );
};

export default Home;
