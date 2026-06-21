import { Play } from "lucide-react";

const categories = [
  "First Time Homebuyer",
  "Mortgage 101",
  "Credit Building",
  "Rent vs. Buy",
  "Building Wealth Around Real Estate",
  "Your Mortgage Team",
  "Refinancing",
  "Home Seller",
  "Self-Employed Home Buyer",
  "Non-Traditional Home Buyer",
  "Veteran",
  "Mortage Hacks"
];

const EducationPanel = () => (
  <div className=" w-full bg-[#0f5132] p-4 sm:p-6 rounded-3xl shadow-2xl max-h-[80vh] overflow-y-auto">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_2fr] gap-4 max-w-6xl mx-auto">

      {/* Category buttons */}
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 content-start">
        {categories.map((label) => (
          <button
            key={label}
            className="rounded-2xl px-4 sm:px-6 py-4 sm:py-7 text-center bg-white text-black font-bold text-sm sm:text-md leading-snug transition-colors hover:bg-green-400"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Right side cards */}
      <div className="flex flex-col gap-4">

        {/* Featured video card */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 flex items-center justify-between gap-4">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight max-w-[260px]">
              3 Things To Avoid After You Apply For A Loan
            </h2>
            <button className="flex items-center gap-2 bg-[#0f5132] text-white font-bold rounded-xl mt-4 sm:mt-16 px-4 sm:px-6 py-2 sm:py-3 w-fit hover:bg-[#0c3f27] text-sm">
              <Play size={16} fill="white" />
              Play Video
            </button>
          </div>
          <img
            src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d509901b89bb3fd2a62d4d_pexels-alena-darmel-7641900.jpg"
            alt="Couple holding keys"
            className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-2xl flex-shrink-0"
          />
        </div>

        {/* Bottom two cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-1">
          <div className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between gap-4">
            <h3 className="text-sm sm:text-md font-bold text-gray-900 leading-snug">
              What You Need To Get Pre-Qualified
            </h3>
            <button className="flex items-center gap-2 bg-[#0f5132] text-white font-bold rounded-xl px-4 sm:px-6 py-2 sm:py-3 w-fit hover:bg-[#0c3f27] text-sm">
              <Play size={16} fill="white" />
              Play Video
            </button>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between gap-4">
            <div>
              <p className="text-xs sm:text-sm text-gray-500 mb-2">More</p>
              <h3 className="text-base sm:text-xl font-bold text-gray-900 leading-snug">
                See more educational materials
              </h3>
            </div>
            <button className="flex items-center gap-2 bg-[#0f5132] text-white font-bold rounded-xl px-4 sm:px-6 py-2 sm:py-3 w-fit hover:bg-[#0c3f27] text-sm">
              Explore
              <img src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b0d_ic-arrow-forward-white.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EducationPanel;