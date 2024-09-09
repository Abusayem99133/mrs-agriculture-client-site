import Banner from "./Banner";
import Experience from "./Experience";
import Services from "./Services";

const Home = () => {
  return (
    <section>
      <div>
        <div>
          <Banner />
        </div>
        <div className="max-w-7xl mx-auto">
          <Experience />
        </div>
        <div>
          <Services />
        </div>
      </div>
    </section>
  );
};

export default Home;
