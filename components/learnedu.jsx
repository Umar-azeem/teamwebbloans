import React, { useState } from "react";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

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

const EducationSection = ({ setScheduleOpen, setContactOpen }) => {
  const [index, setIndex] = useState(0);

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  React.useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
      setIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = 200;
  const gap = 24;
  const step = cardWidth + gap;

  const next = () => {
    if (index < cards.length - visibleCount) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const canPrev = index > 0;
  const canNext = index < cards.length - visibleCount;

  return (
    <div className="w-full bg-[#F5F5F5] py-12  rounded-2xl mt-3 mb-3">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:w-[600px] pl-8">
          <p className="text-[#006B2F] uppercase text-center  md:text-start tracking-[3px] sm:tracking-[6px] font-extrabold text-md sm:text-lg mb-6 sm:mb-8">
            EDUCATION
          </p>

          <h1 className="text-[25px] text-center md:text-start sm:text-[40px] lg:text-[36px] leading-[1.2] font-semibold text-[#1f1f1f] mb-4 sm:mb-10">
            Learn More About Us And Fit Your Unique Needs
          </h1>

          <p className="text-gray-500 mt-6 text-sm">
            Here to guide you along your home buying journey:
          </p>

          <div className="w-full hidden md:flex flex-col sm:flex-row gap-3 mt-8">
            <button
              onClick={() => setScheduleOpen(true)}
              className="bg-[#006132] text-[16px] gap-2  text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center "
            >
             <Calendar className="w-4 h-4"/> Schedule Intro Call <ArrowRight size={18} />
            </button>

            <button
              onClick={() => setContactOpen(true)}
              className="border-2 border-gray-800  text-[16px] px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-black"
            >
              Quick Contact <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[650px] pl-10 md:pl-0 flex flex-col justify-center py-0 md:py-16">
          <div className="overflow-hidden">
            <div
              className="flex  gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${index * step}px)` }}
            >
              {cards.map((item, i) => (
                <div
                  key={i}
                  className="min-w-[200px] h-[260px] md:min-w-[270px] md:h-[300px]  border-t-10 border-black bg-[#006132] text-white rounded-b-3xl p-6 flex flex-col justify-between flex-shrink-0"
                >
                  <div className="flex items-center  ">
                    <img
                      className="w-5 h-5 object-contain"
                      src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d6f053f3aaee0cbfc8fac7_new-logo.png"
                      alt="logo"
                    />
                    <span className="text-[7px] tracking-wider">
                      ADRIAN WEBB
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold max-w-[200px] ">{item}</h2>

                  <button className="flex items-center gap-2 text-sm underline font-bold">
                    Learn More <ArrowRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6 justify-center">
            <button
              onClick={prev}
              disabled={!canPrev}
              className={`w-12 h-12 rounded-full text-white shadow flex items-center justify-center transition-opacity duration-200 ${
                canPrev
                  ? "bg-black"
                  : "bg-gray-400 opacity-50 cursor-not-allowed"
              }`}
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              disabled={!canNext}
              className={`w-12 h-12 rounded-full text-white flex items-center justify-center transition-opacity duration-200 ${
                canNext
                  ? "bg-black"
                  : "bg-gray-400 opacity-50 cursor-not-allowed"
              }`}
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
