const CommunitySection = ({ setScheduleOpen }) => {
  return (
    <section className=" py-16 sm:py-24 lg:py-30 px-4 sm:px-6 lg:px-1">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <p className="text-[#006B2F] uppercase tracking-[3px] sm:tracking-[6px] font-extrabold text-md sm:text-lg mb-6 sm:mb-8">
            Our Community
          </p>

          <h2 className="text-[25px] sm:text-[40px] lg:text-[36px] leading-[1.2] font-semibold text-[#1f1f1f] mb-4 sm:mb-10">
            Making An Impact In Our Local Communities.
          </h2>

          <p className="text-[15px] text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 sm:mb-14">
            We're proud of more than 15 years of serving our customers and
            excited about the future as we continue to evolve to meet their
            needs.
          </p>
          <button
            onClick={() => setScheduleOpen(true)}
            className="bg-[#006B2F] w-full sm:w-auto flex items-center justify-center gap-3  text-white  px-6 py-4 rounded-xl font-bold transition transform duration-300 hover:-translate-y-1"
          >
            <img
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b25_ic-calendar-white.svg"
              alt="Calendar"
            />
            Schedule Intro Call
          </button>

          <div className="mt-10 sm:mt-14 flex flex-row items-center justify-center md:justify-start gap-6 sm:gap-2 text-xl sm:text-2xl">
            <div className=" flex flex-col md:flex-row items-center gap-2">
              <h3 className="font-bold text-2xl md:text-4xl  text-[#111827] whitespace-nowrap">
                15+ Years
              </h3>

              <p className="text-gray-600 leading-tight whitespace-nowrap text-sm font-light sm:text-2xl">
                Of Serving Our <span className="block">Customers</span>
              </p>
            </div>

            <div className=" flex flex-col md:flex-row items-center gap-2">
              <h3 className="font-bold text-2xl md:text-4xl  text-[#111827] whitespace-nowrap">
                3,000+
              </h3>

              <p className="text-gray-600 text-sm font-light leading-tight whitespace-nowrap  sm:text-2xl">
                Individual Loans
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center mt-4 lg:mt-0 bottom-12 ">
          <img
            src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/6632bb747bb4d01bd5a2bb57_Miller%20and%20open.jpg"
            alt="Community"
            className="w-full max-w-[490px] h-[280px] sm:h-[400px] lg:h-[370px] object-cover rounded-xl lg:rounded-none"
          />

          <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-[18px] sm:rounded-[22px] shadow-xl px-4 py-4 flex items-center gap-4 sm:gap-8 w-[90%] sm:w-[420px]">
            <div className="text-2xl sm:text-3xl">🤝</div>

            <div>
              <p className="text-[15px] sm:text-[20px] italic text-black leading-relaxed">
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
