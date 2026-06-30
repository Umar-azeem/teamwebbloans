import { useState } from "react";
import Hero from "./hero";

const videos = [
  {
    id: 1,
    title: "Realtors: Create Happier Buyers By Doing This",
    thumbnail: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65fb20bf981dc10c06120062_Realtorproductvideo2.png",
    videoUrl: "https://wowmivh.com/AdrianWebbMortgage/Advisors/AdrianWebb/realtorproductvideo2.mp4",
  },
  {
    id: 2,
    title: "What Direct Lenders & Big Banks Can't Give You",
    thumbnail: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65fb20ca9467fda44eae7284_Realtorproductvideo3.png",
    videoUrl: "https://wowmivh.com/AdrianWebbMortgage/Advisors/AdrianWebb/realtorproductvideo3.mp4",
  },
  {
    id: 3,
    title: "The Single Most Important Thing To Home Buyers",
    thumbnail: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65fb20d13dda4a60a436847d_Realtorproductvideo4.png",
    videoUrl: "https://wowmivh.com/AdrianWebbMortgage/Advisors/AdrianWebb/realtorproductvideo4.mp4",
  },
  {
    id: 4,
    title: "This Is The Key To Finding More Home Buyers",
    thumbnail: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65fb20d8375649dd1b821920_Realtorproductvideo5.png",
    videoUrl: "https://wowmivh.com/AdrianWebbMortgage/Advisors/AdrianWebb/realtorproductvideo5.mp4",
  },
  {
    id: 5,
    title: "Only A Handful Of Mortgage Pros Can Give Realtors This",
    thumbnail: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65fb20defd838c074b4f00cd_Realtorproductvideo6.png",
    videoUrl: "https://wowmivh.com/AdrianWebbMortgage/Advisors/AdrianWebb/realtorproductvideo6.mp4",
  },
];

function PillarsSection({ setScheduleOpen }) {
  const [activeId, setActiveId] = useState(3);
  const [playing, setPlaying] = useState(false);

  const activeVideo = videos.find((v) => v.id === activeId) || videos[0];;

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-[#006B2F] uppercase tracking-[4px] font-extrabold text-sm mb-4">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f1f1f] leading-tight max-w-3xl mx-auto">
            Unlock the 5 Pillars of a Killer Realtor–Mortgage Pro Partnership!
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Ready to supercharge your Realtor game? Dive into our 5-part video
            series to discover how the right mortgage pro can be your ultimate
            win-win. 🚀
          </p>
        </div>

        {/* Accordion + Preview */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left — Accordion list */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {videos.map((video) => {
              const isActive = video.id === activeId;
              return (
                <button
                  key={video.id}
                  onClick={() => {
                    setActiveId(video.id);
                    setPlaying(false);
                  }}
                  className={`group w-full relative overflow-hidden flex items-center justify-between text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                    isActive
                      ? "bg-[#006B2F] text-white border-[#006B2F] shadow-md"
                      : "bg-white text-[#1f1f1f] border-gray-200 hover:bg-[#006B2F] hover:border-[#006B2F] hover:shadow-md"
                  }`}
                >
                  {/* Logo watermark shown on active or hover */}
                  <img
                    src="/img/logo.png"
                    alt=""
                    aria-hidden="true"
                    className={`pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 h-10 w-auto object-contain transition-opacity duration-200 ${
                      isActive ? "opacity-10" : "opacity-0 group-hover:opacity-10"
                    }`}
                  />

                  <span className={`relative z-10 font-semibold text-sm sm:text-base leading-snug transition-colors duration-200 ${
                    isActive ? "text-white" : "text-[#1f1f1f] group-hover:text-white"
                  }`}>
                    {video.title}
                  </span>

                  <span className={`relative z-10 ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    isActive ? "bg-white/20" : "bg-gray-100 group-hover:bg-white/20"
                  }`}>
                    {isActive ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <rect x="6" y="4" width="4" height="16" rx="1"/>
                        <rect x="14" y="4" width="4" height="16" rx="1"/>
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#006B2F" style={{ transition: "fill 0.2s" }}
                        onMouseEnter={(e) => e.currentTarget.setAttribute("fill", "white")}
                        onMouseLeave={(e) => e.currentTarget.setAttribute("fill", "#006B2F")}
                      >
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right — Video preview card */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden bg-[#006B2F] shadow-xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[440px]">
              {/* Background thumbnail */}
              {!playing && (
                <>
                  <img
                    src={activeVideo.thumbnail}
                    alt={activeVideo.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Green overlay at top */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#006B2F]/80 via-transparent to-[#006B2F]/60" />

                  {/* Logo + Title overlay */}
                  <div className="absolute top-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <img
                          src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d52696651ec66de7ebdf45_Asset%206.png"
                          alt="Logo"
                          className="w-7 h-7 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-xl sm:text-2xl leading-tight max-w-[260px]">
                      {activeVideo.title}
                    </h3>
                  </div>

                  {/* Advisor info bottom-left */}
                  <div className="absolute bottom-16 left-5">
                    <p className="text-white font-extrabold text-sm uppercase tracking-wide leading-none">
                      ADRIAN
                    </p>
                    <p className="text-white font-extrabold text-sm uppercase tracking-wide leading-none">
                      WEBB
                    </p>
                    <p className="text-white/80 text-xs mt-1">Sr. Senior Mortgage Advisor</p>
                    <p className="text-white/60 text-xs">NMLS ID: 811655</p>
                  </div>

                  {/* Play Video button */}
                  <button
                    onClick={() => setPlaying(true)}
                    className="absolute bottom-5 left-5 flex items-center gap-2 bg-white text-[#006B2F] font-bold text-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                  >
                    <span className="w-6 h-6 bg-[#006B2F] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="10" viewBox="0 0 10 12" fill="white">
                        <polygon points="0 0 10 6 0 12"/>
                      </svg>
                    </span>
                    Play Video
                  </button>
                </>
              )}

              {/* Actual video player when playing */}
              {playing && (
                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setScheduleOpen(true)}
            className="bg-[#006B2F] flex items-center gap-3 text-white px-8 py-4 rounded-xl font-bold transition transform duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
          >
            <img
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b25_ic-calendar-white.svg"
              alt="Calendar"
              className="w-5 h-5"
            />
            Schedule Intro Call
          </button>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    id: 1,
    title: "Complete Application",
    description:
      "After a consultation, each borrower will fill out an application and the first step is to take a look at their credit history. This will be the start of our home buying journey together.",
  },
  {
    id: 2,
    title: "Documentation Verification",
    description:
      "Once the application has been submitted, our team will be sending a list of items needed to finish pre-approval. Some of the basic items that will be needed:",
    list: [
      "Drivers license/Identification",
      "2 years of W2 forms",
      "2 months of bank statements",
      "2 years of tax returns",
      "1 months of paystubs",
    ],
  },
  {
    id: 3,
    title: "Loan Analysis",
    description:
      "Once we receive all their documents, we review and see which loan programs would best fit. This process can take 24-48 hours to complete.",
  },
  {
    id: 4,
    title: "Option Review",
    description:
      "Once we are done with our analysis, we can typically come up with 2-4 options to move forward with the home purchase. We review the options with the borrower so they understand all the important facets of buying your home i.e monthly payment, cash to close, and what the mortgage means to them so they feel more confident with their purchase.",
  },
  {
    id: 5,
    title: "House Search Begins!",
    description:
      "Pre-approval in hand, your clients are now empowered and one step closer to finding their dream home. Let's go house hunting!",
  },
];

function useScrollReveal() {
  const [visibleItems, setVisibleItems] = useState({});

  const ref = (id) => (el) => {
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleItems((prev) => ({ ...prev, [id]: true }));
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
  };

  return { visibleItems, ref };
}

function ApplicationProcess({ setScheduleOpen }) {
  const { visibleItems, ref } = useScrollReveal();

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — sticky heading */}
          <div
            ref={ref("heading")}
            style={{
              opacity: visibleItems["heading"] ? 1 : 0,
              transform: visibleItems["heading"] ? "translateX(0)" : "translateX(-48px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-[#006B2F] uppercase tracking-[4px] font-extrabold text-sm mb-5">
              Application Process
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a1a] leading-tight mb-6">
              A Reliable Loan Process You And Your Clients Can Believe In.
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              With our tried and tested loan process, your clients can get
              pre-approved for their mortgage in just 5 easy steps:
            </p>
            <button
              onClick={() => setScheduleOpen(true)}
              className="bg-[#006B2F] flex items-center gap-3 text-white px-7 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-md"
            >
              <img
                src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b25_ic-calendar-white.svg"
                alt="Calendar"
                className="w-5 h-5"
              />
              Schedule Intro Call
            </button>
          </div>

          {/* Right — steps timeline */}
          <div className="relative flex flex-col">
            {/* Vertical line */}
            <div className="absolute left-[27px] top-10 bottom-10 w-[2px] bg-gray-200 z-0" />

            {steps.map((step, index) => {
              const isFirst = index === 0;
              const delay = index * 150;
              const visible = visibleItems[`step-${step.id}`];

              return (
                <div
                  key={step.id}
                  ref={ref(`step-${step.id}`)}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(40px)",
                    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
                  }}
                  className="relative flex gap-6 pb-10 last:pb-0"
                >
                  {/* Circle number */}
                  <div className="flex-shrink-0 relative z-10">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                        isFirst
                          ? "bg-white border-[3px] border-[#006B2F] text-[#006B2F] shadow-[0_0_0_4px_rgba(0,107,47,0.15)]"
                          : "bg-white border-2 border-gray-300 text-gray-500"
                      }`}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-3 pb-2">
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        isFirst ? "text-[#1a1a1a]" : "text-[#1a1a1a]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    {step.list && (
                      <ul className="mt-2 space-y-0.5">
                        {step.list.map((item) => (
                          <li key={item} className="text-gray-500 text-sm">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScheduleConsultation({ setScheduleOpen }) {
  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-[#1a1a1a] rounded-3xl overflow-hidden min-h-[320px] flex items-center">

          {/* Chevron watermark background */}
          <div className="absolute right-0 top-0 bottom-0 w-[55%] overflow-hidden pointer-events-none select-none">
            <svg
              viewBox="0 0 400 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
            >
              {/* Large chevrons stacked */}
              <polyline points="60,40 200,160 60,280" stroke="#2e2e2e" strokeWidth="60" strokeLinejoin="round" fill="none"/>
              <polyline points="160,40 300,160 160,280" stroke="#2a2a2a" strokeWidth="60" strokeLinejoin="round" fill="none"/>
              <polyline points="260,40 400,160 260,280" stroke="#262626" strokeWidth="60" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>

          {/* Person image — overflows top */}
          <div className="relative z-10 flex-shrink-0 self-end ml-6 sm:ml-10 lg:ml-16">
            <img
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b1f_Adrian%20webb%20suit%20cutout.png"
              alt="Adrian Webb"
              className="h-[280px] sm:h-[340px] lg:h-[380px] w-auto object-contain object-bottom -mb-0"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex-1 px-8 sm:px-10 lg:px-14 py-12">
            <p className="text-white uppercase tracking-[4px] font-bold text-xs sm:text-sm mb-4">
              Schedule Consultation
            </p>
            <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
              Join Our Exclusive<br />
              Partnership Program! 🚀
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm mb-8">
              Unlock the perks of teaming up with a top-tier mortgage pro. Let's
              build a roadmap to skyrocket your sales and listings. Schedule a
              consultation today!
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mb-8">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/adrian.webb.127"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white hover:border-white transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/adrian-webb-492b2910/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white hover:border-white transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/adrian.webb.127/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white hover:border-white transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/channel/UCPdDvkQzRXzOt16uQ6J3sEA"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white hover:border-white transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1a1a1a"/>
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setScheduleOpen(true)}
              className="flex items-center gap-3 bg-white text-[#1a1a1a] font-bold text-sm sm:text-base px-7 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform"
            >
              <img
                src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b25_ic-calendar-white.svg"
                alt="Calendar"
                className="w-5 h-5 invert"
              />
              Schedule An Intro Call Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Realtor({ setScheduleOpen,  }) {
  return (
    <div>
      <Hero />

      {/* ── Community Section ── */}
      <section className="bg-white py-16 sm:py-24 lg:py-30 px-4 sm:px-6 lg:px-1 m-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-[#006B2F] uppercase tracking-[3px] sm:tracking-[6px] font-extrabold text-md sm:text-lg mb-6 sm:mb-8">
              Our Community
            </p>

            <h2 className="text-[25px] sm:text-[40px] lg:text-[36px] leading-[1.2] font-semibold text-[#1f1f1f] mb-4 sm:mb-10">
              Making An Impact In Our Local Communities For 15 Years
            </h2>

            <p className="text-[15px] text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 sm:mb-14">
              We're proud of more than 15 years of serving our customers and
              excited about the future as we continue to evolve to meet their
              needs.
            </p>

            <button
              onClick={() => setScheduleOpen(true)}
              className="bg-[#006B2F] w-full sm:w-auto flex items-center justify-center gap-3 text-white px-6 py-4 rounded-xl font-bold transition transform duration-300 hover:-translate-y-1"
            >
              <img
                src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b25_ic-calendar-white.svg"
                alt="Calendar"
              />
              Schedule Intro Call
            </button>

            <div className="mt-10 sm:mt-14 flex flex-row items-center justify-center md:justify-start gap-6 sm:gap-2 text-xl sm:text-2xl">
              <div className="flex flex-col md:flex-row items-center gap-2">
                <h3 className="font-bold text-2xl md:text-4xl text-[#111827] whitespace-nowrap">
                  15+ Years
                </h3>
                <p className="text-gray-600 leading-tight whitespace-nowrap text-sm font-light sm:text-2xl">
                  Of Serving Our <span className="block">Customers</span>
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-2">
                <h3 className="font-bold text-2xl md:text-4xl text-[#111827] whitespace-nowrap">
                  3,000+
                </h3>
                <p className="text-gray-600 text-sm font-light leading-tight whitespace-nowrap sm:text-2xl">
                  Individual Loans
                </p>
              </div>
            </div>

            <div className="hidden md:flex flex-col md:flex-row items-center gap-2">
              <img
                src="/img/ban.png"
                alt="Community"
                className="max-w-full object-cover rounded-xl lg:rounded-none"
              />
            </div>
          </div>

          <div className="relative flex justify-center mt-4 lg:mt-0 bottom-12">
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

      {/* ── 5 Pillars Video Section ── */}
      <PillarsSection setScheduleOpen={setScheduleOpen} />

      {/* ── Application Process Section ── */}
      <ApplicationProcess setScheduleOpen={setScheduleOpen} />

      {/* ── Schedule Consultation Section ── */}
      <ScheduleConsultation setScheduleOpen={setScheduleOpen} />
    </div>
  );
}

export default Realtor;