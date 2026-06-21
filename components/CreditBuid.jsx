
import { ArrowRight } from "lucide-react";

const items = [
  {
    tag: "Veteran",
    title: "Sellers, Don't Fall For This",
  },
  {
    tag: "Building Wealth Around Real Estate",
    title: "Investing In Out Of State Real Estate",
  },
  {
    tag: "Rent vs. Buy",
    title: "Where To Find Down Payment Assistance",
  },
];

const CreditBuild =  ({ setScheduleOpen }) => {
  return (
    <div className="w-full bg-gray-100 py-20 px-10 rounded-2xl">
      <div className="flex flex-col lg:flex-row gap-12">


        <div className="relative w-full lg:w-[60%] rounded-3xl overflow-hidden">

      
          <img
            src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/6632bc62d05574b6f73b2c4b_Speaking%20AW.jpg"
            alt="speaker"
            className="w-full h-150 object-cover rounded-3xl"
          />

          
          <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-lg p-6 w-[70%]">
            <div className="text-xs font-bold text-teal-600 tracking-widest mb-2 bg-green-100 w-35 rounded-md p-2">
              CREDIT BUILDING
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Avoid This Credit Myth
            </h3>
          </div>
        </div>

        
        <div className="w-full lg:w-[40%] flex flex-col justify-between">

          <div>
            <p className="text-green-700 font-bold tracking-[4px] mb-4">
              EDUCATION
            </p>

            <h1 className="text-4xl font-semibold leading-snug text-gray-900 mb-10">
              Learn More About Your Mortgage
            </h1>

            
            <div className="space-y-5">
            {items.map((item, i) => {
  const tagColors = [
    "bg-green-100 text-green-600",
    "bg-blue-100 text-blue-600",
    "bg-orange-100 text-orange-600",
  ];

  return (
    <div
      key={i}
      className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition"
    >
      <span
        className={`text-xs uppercase px-3 py-1 rounded-full ${tagColors[i]}`}
      >
        {item.tag}
      </span>

      <p className="mt-3 font-medium text-gray-900">
        {item.title}
      </p>
    </div>
  );
})}
            </div>
          </div>

          
          <div className="flex gap-4 mt-10">
            <button
             onClick={() => setScheduleOpen(true)}
             className="bg-green-800 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-semibold">
             <img src="https://cdn.prod.website-files.com/6463653eea7395f6535ff53c/646383f8ff0a8d874058f83e_ic-calendar-white.svg"></img>
              Schedule Intro Call 
            </button>

            <button className="border border-gray-900 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold text-black">
              Quick Contact <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditBuild;