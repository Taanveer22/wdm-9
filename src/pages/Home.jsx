import { useLoaderData } from "react-router-dom";
import Adventures from "../components/Adventures";
import Banner from "../components/Banner";
import Reviews from "../components/Reviews";
import WhyChooseUs from "../components/WhyChooseUs";


const Home = () => {
  const { data, data2 } = useLoaderData();
  // console.log(data, data2);

  return (
    <div>
      <div className="mb-8 lg:mb-12">
        <Banner></Banner>
      </div>
      <div className="mb-8 lg:mb-12">
        <Adventures data={data}></Adventures>
      </div>
      <div className="mb-8 lg:mb-12">
        <WhyChooseUs></WhyChooseUs>
      </div>
      <div className="">
        <Reviews data2={data2}></Reviews>
      </div>
    </div>
  );
};

export default Home;
