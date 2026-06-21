export default function  Loan({ setScheduleOpen }) {
  const socialIcons = [
    "https://api.iconify.design/flowbite:facebook-solid.svg?color=%23000000",
     "https://api.iconify.design/famicons:logo-instagram.svg?color=%23000000",
    "https://api.iconify.design/uim:linkedin-alt.svg?color=%23000000",
    "https://api.iconify.design/tdesign:logo-youtube-filled.svg?color=%23000000",
  ];

  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <p className="text-green-800 uppercase tracking-[0.3em] font-bold mb-4">
            Let's Get Started!
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-gray-900">
            Ready To Apply For Your Home Loan?
          </h1>

          <p className="mt-8 text-gray-800 text-md leading-1.2 max-w-xl">
            Your path to ownership is just one click away! Schedule a
            complimentary consultation now so we can take a look at your
            specific needs and find the perfect home loan for you.
          </p>

          <button
           onClick={() => setScheduleOpen(true)}
           className="mt-10 flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-semibold transition">
            <img
              src="https://cdn.prod.website-files.com/6463653eea7395f6535ff53c/646383f8ff0a8d874058f83e_ic-calendar-white.svg"
              alt="Calendar"
              className="w-5 h-5"
            />
            Schedule Intro Call
          </button>
        </div>

        
        <div className="relative flex justify-center">
          
          <div className="w-[480px] h-[600px] bg-green-700 rounded-[40px]"></div>

          
          <img
            src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d510dfb82945f90c2aa788_Adrian%20Webb%20WMS-p-800.png"
            alt="Advisor"
            className="absolute bottom-0 h-[680px] w-[480px]"
          />

          
          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-[30px] shadow-xl p-8 w-[300px]">
            <h3 className="text-xl font-bold text-black">Adrian Webb</h3>

            <p className="text-gray-800 mt-2 text-sm">
              Senior Mortgage Advisor
            </p>

            <p className="text-gray-800 text-sm mt-2">
              NMLS ID: 811655
            </p>

            <p className="text-gray-800 text-sm">
              NMLS CO ID: 1815656
            </p>

            <div className="flex gap-4 mt-8  ">
              {socialIcons.map((icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center  hover:bg-green-700 transition"
                >
                  <img
                    src={icon}
                    alt=""
                    className="w-5 h-5"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}