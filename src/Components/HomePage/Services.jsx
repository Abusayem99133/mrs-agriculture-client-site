import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section className="mt-32 bg-gradient-to-r from-green-700 via-green-600 to-yellow-500 p-20">
      <div>
        <div className="flex items-center gap-5 justify-between max-w-7xl mx-auto">
          <div>
            <h3 className="font-bold text-3xl text-white">WHAT WE DO</h3>
            <h1 className="text-5xl my-2 font-bold text-white">
              Why choose Our <br /> Fresh Organic Foods
            </h1>
          </div>
          <div>
            <p className="text-white">
              Everything melancholy uncommonly but solicitude inhabiting
              projection off. <br /> Connection stimulated estimating excellence
              an to impression. ladies she basket <br /> season age her uneasy
              saw. Discourse unwilling an no described.
            </p>
            <button className="py-4 px-12  bg-yellow-500 rounded-full my-4">
              View All
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12">
          <ServicesCard />
        </div>
      </div>
    </section>
  );
};

export default Services;
