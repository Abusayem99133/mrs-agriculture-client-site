import React from "react";
import experience from "../../assets/image/experience/5.jpg";
import experience1 from "../../assets/image/experience/4.png";

const Experience = () => {
  return (
    <section>
      <div
        className="mt-32 flex items-center gap-4 "
        // style={{
        //   backgroundImage: `url(${experience1})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "",
        // }}
      >
        <div className="">
          <h3 className="text-2xl font-bold">WHO WE ARE</h3>

          <h1 className="my-4 font-bold text-5xl">
            Beautiful landscapes and the farmers Who bring us our food
          </h1>
          <p>
            Dissuade ecstatic and properly saw entirely sir why laughter
            endeavor. In on my jointure horrible margaret suitable he followed
            speedily.Indeed vanity excuse or mr lovers of on.
          </p>
          <button className="py-2 px-4 border border-yellow-500 rounded-full font-bold my-4 hover:bg-yellow-500 hover:border-hidden">
            More About
          </button>
        </div>
        <div>
          <div className="bg-green-700  card-body text-white absolute ml-[100px] -mt-12 rounded-br-badge">
            <h1 className="text-5xl ml-8 font-bold my-2">36+</h1>
            <p className=" font-bold">Years of experience</p>
          </div>
          <img className="" src={experience} alt="" />
        </div>
      </div>
      <div>
        <div className="flex items-center font-bold justify-between -mt-16">
          <div>
            <h1 className="text-4xl">8600+</h1>
            <p>Tons of harvesta</p>
          </div>
          <div>
            <h1 className="text-4xl">100%</h1>
            <p>Organic Product</p>
          </div>
          <div className="w-1/2 opacity-40">
            <img src={experience1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
