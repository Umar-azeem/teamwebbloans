import ScheduleCallModal from "./scheduleCallModal";

const Icon = ({ src = "", size = 20, className = "" }) => (
  <img src={src} width={size} height={size} className={className} alt="" />
);

const icons = {
  phone: "https://img.icons8.com/ios/50/ffffff/phone.png",
  chevronDown: "https://img.icons8.com/ios/50/ffffff/expand-arrow.png",
  calendar: "https://img.icons8.com/ios/50/0a5c3a/calendar.png",
  arrowRight: "https://img.icons8.com/ios/50/ffffff/forward--v1.png",
  facebook: "https://img.icons8.com/ios-filled/50/374151/facebook-new.png",
  instagram: "https://img.icons8.com/ios/50/374151/instagram-new.png",
  linkedin: "https://img.icons8.com/ios-filled/50/374151/linkedin.png",
  youtube: "https://img.icons8.com/ios-filled/50/374151/youtube-play.png",
};

function Hero({
  eyebrow = "Hi, I'm Adrian Webb",
  title = (
    <>
      Your Local
      <br />
      Mortgage Expert
    </>
  ),
  description = "Your personal mortgage guide on your quest to becoming a homeowner. Click the links below to start your journey with me.",
  image = "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d510dfb82945f90c2aa788_Adrian%20Webb%20WMS-p-1080.png",
  setScheduleOpen,
  scheduleOpen,
  setContactOpen,
}) {
  return (
    <>
      <div className="bg-[#006132] rounded-2xl">
        <main className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center sm:px-6 lg:px-8 pt-18 pb-20 gap-10">
          <div className="flex-1 max-w-2xl w-full text-center lg:text-left px-4 ">
            <div className="hidden md:flex flex-col mt-16">
              <p className="text-md font-bold tracking-[0.2em] mb-6 uppercase">
                {eyebrow}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                {title}
              </h1>
            </div>

            <p className="text-sm sm:text-base text-gray-200 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <button
              onClick={() => setScheduleOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-6 py-4 rounded-xl font-bold transition transform duration-300 hover:-translate-y-1"
            >
              <img
                src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b25_ic-calendar-white.svg"
                alt="Calendar"
              />
              Schedule Intro Call
            </button>
              <button
                onClick={() => setContactOpen && setContactOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-white/30 px-6 py-4 rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1"
              >
                Quick Contact
                <img
                  src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b0d_ic-arrow-forward-white.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center lg:justify-end items-end w-full">
            <div className="absolute hidden -top-2 sm:top-10 left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0 lg:-left-4 xl:-left-16 z-20 md:flex items-center gap-2">
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b22_Customer%20Badges.svg"
                  alt="Customers"
                  className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                />
                <p className="text-sm sm:text-lg text-gray-100 -mt-6 sm:-mt-8 text-center whitespace-nowrap">
                  Satisfied Customers
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">100K+</h2>
            </div>

            <div className="relative w-full max-w-[450px] ">
            <div className="flex flex-col text-center p-6 md:hidden">
              <p className="text-md font-bold tracking-[0.2em] mb-6 uppercase">
                Hi, I'm Adrian Webb
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Your Local
                <br />
                Mortgage Expert
              </h1>
            </div>

            <img
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d510dfb82945f90c2aa788_Adrian%20Webb%20WMS-p-1080.png"
              alt="Adrian Webb"
              className="min-w-full h-[500px] sm:h-[480px] lg:h-[550px] object-cover object-top rounded-2xl"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />

            <div className="absolute bottom-4 flex flex-col justify-center sm:bottom-8 right-0 left-0 sm:left-auto mx-auto sm:mx-0 bg-white text-gray-900 p-5  sm:p-2 rounded-2xl shadow-2xl w-[70%] sm:w-64">
              <h3 className="text-lg font-bold mb-2">Adrian Webb</h3>
              <p className="text-gray-600 text-sm mb-1">
                Senior Mortgage Advisor
              </p>
              <p className="text-gray-500 text-xs mb-1">NMLS ID: 811655</p>
              <p className="text-gray-500 text-xs mb-4">NMLS CO ID: 1815656</p>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/adrian.webb.127"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Icon src={icons.facebook} size={18} />
                </a>
                <a
                  href="https://www.instagram.com/adrian.webb.127/"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Icon src={icons.instagram} size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/adrian-webb-492b2910/"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Icon src={icons.linkedin} size={18} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCPdDvkQzRXzOt16uQ6J3sEA"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Icon src={icons.youtube} size={18} />
                </a>
              </div>
            </div>
          </div>
          </div>
        </main>
        <ScheduleCallModal
        isOpen={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
        onConfirm={(appointmentDetails) => {
          console.log("Appointment confirmed:", appointmentDetails);
        }}
      />
      </div>
    </>
  );
}

export default Hero;