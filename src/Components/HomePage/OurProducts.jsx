import OurProductCard from "./OurProductCard";

const OurProducts = () => {
  return (
    <div>
      <div className="text-center mt-32">
        <h2 className="text-slate-400 text-3xl my-2">OUR PRODUCT</h2>
        <h1 className="text-5xl font-bold ">Fresh & Organic Product</h1>
      </div>
      <div>
        <OurProductCard />
      </div>
    </div>
  );
};

export default OurProducts;
