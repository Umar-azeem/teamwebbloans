export default function Loan({ setScheduleOpen }) {
  const socialIcons = [
    "https://api.iconify.design/flowbite:facebook-solid.svg?color=%23000000",
    "https://api.iconify.design/famicons:logo-instagram.svg?color=%23000000",
    "https://api.iconify.design/uim:linkedin-alt.svg?color=%23000000",
    "https://api.iconify.design/tdesign:logo-youtube-filled.svg?color=%23000000",
  ];

  return (
    <section className="bg-[#006132]py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        <div className="text-center lg:text-left">
          <p className="text-[#006132] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold mb-4 text-sm sm:text-base">
            Let's Get Started!
          </p>

          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-900">
            Ready To Apply For Your Home Loan?
          </h1>

          <p className="mt-6 sm:mt-8 text-gray-800 text-sm sm:text-md leading-relaxed max-w-xl mx-auto lg:mx-0">
            Your path to ownership is just one click away! Schedule a
            complimentary consultation now so we can take a look at your
            specific needs and find the perfect home loan for you.
          </p>

          <button
            onClick={() => setScheduleOpen(true)}
            className="mt-8 sm:mt-10 inline-flex items-center gap-3 bg-[#006132] hover:bg-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition mx-auto lg:mx-0"
          >
            <img
              src="https://cdn.prod.website-files.com/6463653eea7395f6535ff53c/646383f8ff0a8d874058f83e_ic-calendar-white.svg"
              alt="Calendar"
              className="w-5 h-5"
            />
            Schedule Intro Call
          </button>
        </div>

        <div className="relative flex justify-center mt-16 sm:mt-20 lg:mt-0">
          <div className="w-full max-w-[500px] aspect-[4/5] sm:h-[600px] bg-[#006132] rounded-[20px] "></div>

          <img
            src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d510dfb82945f90c2aa788_Adrian%20Webb%20WMS-p-800.png"
            alt="Advisor"
            className="absolute bottom-[2px]  h-[100%] w-full max-w-[650px] object-contain object-bottom md:h-[680px] md:w-[480px]  rounded-[20px]"
          />

          <div className=" absolute  left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 top-auto bottom-4 md:bottom-0 sm:top-90 sm:-translate-y-1/2 bg-white rounded-[24px] sm:rounded-[30px] shadow-xl p-5 sm:p-8 w-[68%] sm:w-[300px]">
            <h3 className="text-lg sm:text-xl font-bold text-black">Adrian Webb</h3>

            <p className="text-gray-800 mt-2 text-xs">
              Senior Mortgage Advisor
            </p>

            <p className="text-gray-800 text-xs mt-2">
              NMLS ID: 811655
            </p>

            <p className="text-gray-800 text-xs">
              NMLS CO ID: 1815656
            </p>

            <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
              {socialIcons.map((icon, index) => (
                <div
                  key={index}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#006132] transition"
                >
                  <img src={icon} alt="" className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}