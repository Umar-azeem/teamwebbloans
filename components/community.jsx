
const CommunitySection = ({ setScheduleOpen }) => {
  return (
    <section className="bg-[#f5f5f5] py-30 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <p className="text-[#006B2F] uppercase tracking-[6px] font-bold text-xl mb-8">
            Our Community
          </p>

          <h2 className="text-[35px] leading-[1.2] font-semibold text-[#1f1f1f] mb-10">
            Making An Impact In Our Local Communities.
          </h2>

          <p className="text-[15px] text-gray-600 leading-1.2 max-w-2xl mb-14">
            We're proud of more than 15 years of serving our customers and
            excited about the future as we continue to evolve to meet their
            needs.
          </p>

          
          <button 
          onClick={() => setScheduleOpen(true)}
          className="bg-[#006B2F] text-white px-4 py-4 rounded-xl flex items-center gap-4 text-xl font-semibold transition duration-300 hover:translate-y-1">
             <img
              src="https://cdn.prod.website-files.com/6463653eea7395f6535ff53c/646383f8ff0a8d874058f83e_ic-calendar-white.svg"
              alt=""
              className="w-4"
            />
            Schedule Intro Call
          </button>

        
<div className="mt-24 flex  items-center gap-2 text-2xl">
 

  <h3 className=" font-bold text-[#111827] whitespace-nowrap">
    15+ Years
  </h3>

  
  <p className=" text-gray-600 leading-tight whitespace-nowrap">
    Of Serving Our{" "}
    <span className="block">Customers</span>
  </p>

  
  <h3 className=" font-bold text-[#111827] whitespace-nowrap">
    3,000+
  </h3>

  <p className=" text-gray-600 leading-tight whitespace-nowrap">
    Individual Loans
  </p>

</div>
</div>
        
        <div className="relative flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/6632bb747bb4d01bd5a2bb57_Miller%20and%20open.jpg"
            alt="Community"
            className="w-full max-w-[760px] h-[550px] object-cover"
          />

          
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-[22px] shadow-xl px-4 py-4 flex items-center gap-8 w-[420px]">
            <div className="text-3xl">🤝</div>

            <div>
              <p className="text-[20px] italic text-black leading-relaxed">
                Prefer To Meet One on One?
                <br />
                Schedule A Consultation Today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;