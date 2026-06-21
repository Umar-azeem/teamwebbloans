import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  "First Time Homebuyer",
  "Credit Building",
  "Building Wealth Around Real Estate",
  "Refinance",
  "Self Employed Home Buyer",
  "Veteran",
  "Mortgage 101",
  "Rent vs Buy",
  "Your Mortgage Team",
  "Home Seller",

];

const EducationSection  = ({ setScheduleOpen }) => {
 const [index, setIndex] = useState(0);

  const next = () => {
    if (index < cards.length - 3) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="w-full bg-gray-200 py-20 px-10 rounded-2xl mt-3 mb-3">
      <div className="flex flex-col lg:flex-row justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="w-[600px]">
          <p className="text-green-700 font-bold tracking-[4px] mb-6">
            EDUCATION
          </p>

          <h1 className="text-3xl font-semibold text-gray-900 leading-tight">
            Learn More About Us And Fit Your Unique Needs
          </h1>

          <p className="text-gray-500 mt-6 text-sm">
            Here to guide you along your home buying journey:
          </p>

          <div className="flex gap-4 mt-8">
            <button
             onClick={() => setScheduleOpen(true)} 
            className="bg-green-800 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-1">
              Schedule Intro Call <ArrowRight size={18} />
            </button>

            <button className="border border-gray-800 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 text-black">
              Quick Contact <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE CAROUSEL */}
        <div className="w-[650px]">

          {/* VIEWPORT */}
          <div className="overflow-hidden">

            {/* TRACK */}
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{
                transform: `translateX(-${index * 220}px)`,
              }}
            >

             {cards.map((item, i) => (
  <div
    key={i}
    className="min-w-[200px] h-[260px] bg-green-800 text-white rounded-b-3xl p-6 flex flex-col justify-between "
  >
    {/* TOP SECTION */}
    <div className="flex ">
      <img
        className="w-8 h-5"
        src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d6f053f3aaee0cbfc8fac7_new-logo.png"
        alt="logo"
      />

      <span className="text-sm tracking-wider">
        ADRIAN WEBB
      </span>
    </div>

    {/* MIDDLE TITLE */}
    <h2 className="text-xl  font-bold">
      {item}
    </h2>

    {/* BOTTOM BUTTON */}
    <button className="flex items-center gap-2 text-sm underline font-bold">
      Learn More <ArrowRight size={18} />
    </button>
  </div>
))}

            </div>
          </div>

          {/* ARROWS BELOW */}
          <div className="flex items-center gap-4 mt-6 justify-center">

            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-black  text-white shadow flex items-center justify-center"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center"
            >
              <ChevronRight />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;