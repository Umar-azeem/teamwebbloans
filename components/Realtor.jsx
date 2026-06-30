import { useState, useEffect, useRef } from "react";
import ApplicationProcess from "./ApplicationProcess";
import Hero from "./hero";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  SquarePlay,
  X,
} from "lucide-react";
import Loan from "./applyLoan";
import { Link } from "react-router-dom";

const videos = [
  {
    id: 1,
    title: "Realtors: Create Happier Buyers By Doing This",
    thumbnail: "/img/m2.png",
    videoUrl: "/img/v1.mp4",
  },
  {
    id: 2,
    title: "What Direct Lenders & Big Banks Can't Give You",
    thumbnail: "/img/m3.png",
    videoUrl: "/img/v1.mp4",
  },
  {
    id: 3,
    title: "The Single Most Important Thing To Home Buyers",
    thumbnail: "/img/m1.png",
    videoUrl: "/img/v1.mp4",
  },
  {
    id: 4,
    title: "This Is The Key To Finding More Home Buyers",
    thumbnail: "img/m4.png",
    videoUrl: "/img/v1.mp4",
  },
  {
    id: 5,
    title: "Only A Handful Of Mortgage Pros Can Give Realtors This",
    thumbnail: "img/m5.png",
    videoUrl: "/img/v1.mp4",
  },
];

const questions = [
  {
    question:
      "How can partnering with Team Webb Loans enhance my real estate business?",
    answer:
      "Partnering with Team Webb Loans provides your real estate business with a dedicated mortgage expert who can offer your clients fast, reliable pre-approvals and a seamless financing experience. This helps you close deals faster, strengthen your reputation, and build lasting client relationships.",
  },
  {
    question:
      "In what ways can a Mortgage Financial Advisor help expedite the mortgage approval process, ensuring a quicker path to closing for our clients?",
    answer:
      "A Mortgage Financial Advisor streamlines the approval process by proactively gathering and reviewing documentation, communicating with underwriters, and addressing potential issues early. This reduces delays, keeps transactions on track, and ensures your clients close on time.",
  },
  {
    question:
      "How can a Mortgage Financial Advisor's expertise in market trends and interest rate fluctuations contribute to more informed pricing and negotiation strategies?",
    answer:
      "With deep knowledge of market trends and interest rate movements, a Mortgage Financial Advisor provides valuable insights that help you price properties competitively and negotiate more effectively. This expertise gives you and your clients a strategic advantage in any market condition.",
  },
  {
    question:
      "In what ways can a Mortgage Financial Advisor support in staying ahead of industry changes and new financing programs, providing a competitive advantage in the real estate market?",
    answer:
      "A Mortgage Financial Advisor continuously monitors industry changes and emerging financing programs, ensuring you're always informed about new opportunities. This proactive approach allows you to offer your clients the most current and competitive options, setting you apart from other real estate professionals.",
  },
];

const cards = [
  { Name: "Realtor", url: "/realtor" },
  { Name: "Financial Planner", url: "/FinancialPlanner" },
  { Name: "Divorce Attorney", url: "/DivorceAttorney" },
];

// Fade In Animation Component
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Text Animation Component (Typewriter-like)
const AnimatedText = ({ text, delay = 0, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  useEffect(() => {
    if (isVisible && text) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isVisible, text]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      {isVisible && displayText.length < text.length && (
        <span className="animate-pulse text-[#006132]">|</span>
      )}
    </span>
  );
};

function Realtor({ setScheduleOpen }) {
  const [activeId, setActiveId] = useState(3);
  const [playing, setPlaying] = useState(false);

  const activeVideo = videos.find((v) => v.id === activeId) || videos[0];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoOpen(false);
  };

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  const [index, setIndex] = useState(0);

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
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
    <div >
      
      <Hero
              eyebrow="HI, I'M Adrian Webb"
              title="I help Realtors® sell and list more homes."
              description="With my expertise, we'll win more bids and close more deals, turning possibilities into properties together!"
            />

      {/* Section 1 - Our Community */}
      <section className="bg-white py-16 sm:py-24 lg:py-30 px-4 sm:px-6 lg:px-1 m-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn className="text-center lg:text-left">
            <p className="text-[#006132] uppercase tracking-[3px] sm:tracking-[6px] font-extrabold text-md sm:text-lg mb-6 sm:mb-8">
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
              className="bg-[#006132] w-full sm:w-auto flex items-center justify-center gap-3 text-white px-6 py-4 rounded-xl font-bold transition transform duration-300 hover:-translate-y-1"
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
          </FadeIn>

          <FadeIn
            delay={200}
            className="relative flex justify-center mt-4 lg:mt-0 bottom-12"
          >
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
          </FadeIn>
        </div>
      </section>
      <div className="w-full bg-[#F5F5F5] p-12  rounded-2xl mt-3 mb-3">
        <div
          className="flex md:flex-row flex-col
             justify-between gap-10"
        >
          <div className=" pl-8">
            <p className="text-[#006B2F] uppercase text-center  md:text-start tracking-[3px] sm:tracking-[6px] font-extrabold text-md sm:text-lg mb-6 sm:mb-8">
              EDUCATION
            </p>

            <h1 className="text-[25px] text-center md:text-start sm:text-[40px] lg:text-[36px] leading-[1.2] font-semibold text-[#1f1f1f] mb-4 sm:mb-10">
              Learn More About Us And Fit Your Unique Needs
            </h1>
            <div className="w-full lg:w-[650px] md:pl-0 flex flex-col justify-center py-0 md:py-16">
              <div className="overflow-hidden">
                <div
                  className="flex   gap-4 transition-transform duration-500"
                  style={{ transform: `translateX(-${index * step}px)` }}
                >
                  {cards.map((item, i) => (
                    <div
                      key={i}
                      className="min-w-[200px] h-[260px] md:min-w-[270px] md:h-[300px]  border-t-10 border-black bg-[#006132] text-white rounded-b-3xl p-6 flex flex-col justify-between flex-shrink-0"
                    >
                      <div className="flex items-center">
                        <img
                          className="w-5 h-5 object-contain"
                          src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d6f053f3aaee0cbfc8fac7_new-logo.png"
                          alt="logo"
                        />
                        <span className="text-[7px] tracking-wider">
                          ADRIAN WEBB
                        </span>
                      </div>

                      <h2 className="text-3xl font-bold max-w-[200px] ">
                        {item.Name}
                      </h2>

                      <Link
                        to={item.url}
                        className="flex items-center gap-2 text-sm underline font-bold"
                      >
                        Learn More <ArrowRight size={18} />
                      </Link>
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

          <div>
            <div className="w-full flex justify-center items-center gap-3 mt-8">
              <button
                onClick={() => setScheduleOpen(true)}
                className="bg-[#006132] text-[16px] gap-2  text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center "
              >
                <Calendar className="w-4 h-4" /> Schedule Intro Call{" "}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - How It Works */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-[#006132] uppercase tracking-[4px] font-extrabold text-sm mb-4">
              How It Works
            </p>
            <h2 className="text-3xl max-w-md sm:text-4xl lg:text-4xl font-bold text-[#1f1f1f] leading-tight mx-auto">
              Unlock the 5 Pillars of a Killer Realtor–Mortgage Pro Partnership!
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm sm:text-base">
              Ready to supercharge your Realtor game? Dive into our 5-part video
              series to discover how the right mortgage pro can be your ultimate
              win-win.
            </p>
          </FadeIn>

          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            <FadeIn
              delay={100}
              className="w-full lg:w-[40%] flex flex-col gap-3"
            >
              {videos.map((video) => {
                const isActive = video.id === activeId;
                return (
                  <button
                    key={video.id}
                    onClick={() => {
                      setActiveId(video.id);
                      setPlaying(false);
                    }}
                    className={`group w-full relative overflow-hidden flex items-center justify-between text-left px-5 py-7 rounded-xl border transition-all duration-200 ${
                      isActive
                        ? "bg-[#006132] text-white border-[#006132] shadow-md"
                        : "bg-white text-[#1f1f1f] border-gray-200 hover:bg-[#006132] hover:border-[#006132] hover:shadow-md"
                    }`}
                  >
                    <img
                      src="/img/logo.png"
                      alt=""
                      aria-hidden="true"
                      className={`pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 h-48 w-38 object-contain transition-opacity duration-200 ${
                        isActive
                          ? "opacity-10"
                          : "opacity-0 group-hover:opacity-10"
                      }`}
                    />

                    <span
                      className={`relative z-10 font-semibold text-sm sm:text-base leading-snug transition-colors duration-200 ${
                        isActive
                          ? "text-white"
                          : "text-[#1f1f1f] group-hover:text-white"
                      }`}
                    >
                      {video.title}
                    </span>

                    <span
                      className={`relative z-10 ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${isActive ? "" : "bg-gray-100 group-hover:bg-white/20"}`}
                    >
                      {isActive ? (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      ) : (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="#006132"
                          style={{ transition: "fill 0.2s" }}
                          onMouseEnter={(e) =>
                            e.currentTarget.setAttribute("fill", "white")
                          }
                          onMouseLeave={(e) =>
                            e.currentTarget.setAttribute("fill", "#006132")
                          }
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      )}
                    </span>
                  </button>
                );
              })}
            </FadeIn>

            <FadeIn delay={300} className="w-[320px] h-[500px]">
              <div className="relative rounded-2xl overflow-hidden bg-[#006132] shadow-xl lg:aspect-auto h-[540px]">
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

                    <button
                      onClick={() => setPlaying(true)}
                      className="absolute bottom-5 left-5 flex items-center gap-2 bg-white text-[#006132] font-bold text-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                    >
                      <span className="w-6 h-6 bg-[#006132] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          width="8"
                          height="10"
                          viewBox="0 0 10 12"
                          fill="white"
                        >
                          <polygon points="0 0 10 6 0 12" />
                        </svg>
                      </span>
                      Play Video
                    </button>
                  </>
                )}

                {playing && (
                  <video
                    src={activeVideo.videoUrl}
                    controls
                    autoPlay
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={200} className="flex justify-center mt-20">
            <button
              onClick={() => setScheduleOpen(true)}
              className="bg-[#006132] flex items-center gap-3 text-white px-8 py-4 rounded-xl font-bold transition transform duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              <img
                src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b25_ic-calendar-white.svg"
                alt="Calendar"
                className="w-5 h-5"
              />
              Schedule Intro Call
            </button>
          </FadeIn>
        </div>
      </section>

      <ApplicationProcess setScheduleOpen={setScheduleOpen} />

      {/* Section 3 - Schedule Consultation Desktop */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl hidden mx-auto md:flex">
          <FadeIn className="relative bg-[#1a1a1a] rounded-3xl overflow-hidden min-h-[320px] flex items-stretch w-full">
            <div className="absolute right-0 top-0 bottom-0 w-[79%] overflow-hidden pointer-events-none select-none">
              <img
                src="/img/logo.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 h-48 max-w-[720px] object-contain transition-opacity duration-200 opacity-10"
              />
            </div>

            <div className="relative flex-shrink-0 z-10 self-end -ml-7 md:ml-10 lg:ml-16">
              <img
                src="/img/adr.png"
                alt="Adrian Webb"
                className="max-w-[420px] object-contain"
              />
            </div>

            <div className="relative z-10 flex-1 px-8 sm:px-10 lg:px-14 py-12 flex flex-col justify-center">
              <p className="text-white uppercase tracking-[4px] font-bold text-xs sm:text-sm mb-4">
                Schedule Consultation
              </p>
              <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Join Our Exclusive
                <br />
                Partnership Program!
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm mb-8">
                Unlock the perks of teaming up with a top-tier mortgage pro.
                Let's build a roadmap to skyrocket your sales and listings.
                Schedule a consultation today!
              </p>

              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/adrian.webb.127"
                    className="w-10 h-10 rounded-full border border-white hover:border-[#006132] p-2 flex items-center justify-center hover:bg-[#006132] transition"
                  >
                    <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#ffffff] bg-transparent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/adrian.webb.127/"
                    className="w-10 h-10 rounded-full border border-white hover:border-[#006132] flex items-center justify-center hover:bg-[#006132] transition"
                  >
                    <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#ffffff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/adrian-webb-492b2910/"
                    className="w-10 h-10 rounded-full border border-white hover:border-[#006132] flex items-center justify-center hover:bg-[#006132] transition"
                  >
                    <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#ffffff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCPdDvkQzRXzOt16uQ6J3sEA"
                    className="w-10 h-10 rounded-full border border-white hover:border-[#006132] flex hover:bg-[#006132] items-center justify-center transition"
                  >
                    <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#ffffff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>

              <button
                onClick={() => setScheduleOpen(true)}
                className="flex items-center gap-3 bg-white text-[#1a1a1a] font-bold text-sm sm:text-base px-7 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform w-fit"
              >
                <img
                  src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b25_ic-calendar-white.svg"
                  alt="Calendar"
                  className="w-5 h-5 invert"
                />
                Schedule An Intro Call Now!
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Mobile */}
        <div className="md:hidden bg-[#1a1a1a] rounded-3xl overflow-hidden min-h-[320px] flex flex-col items-stretch">
          <FadeIn className="text-center py-8">
            <p className="text-gray-400 uppercase tracking-[3px] sm:tracking-[6px] font-extrabold text-md sm:text-lg mb-6 sm:mb-8">
              SCHEDULE CONSULTATION
            </p>

            <h2 className="text-[25px] sm:text-[40px] lg:text-[36px] leading-[1.2] font-semibold text-white mb-4 sm:mb-10">
              Ready to apply for your VA Home Loan?
            </h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute right-0 top-0 bottom-0 w-[100%] overflow-hidden pointer-events-none select-none">
              <img
                src="/img/logo.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute opacity-10"
              />
            </div>

            <div>
              <img
                src="/img/adr.png"
                alt="Adrian Webb"
                className="max-w-[420px] object-contain"
              />
            </div>
          </div>

          <FadeIn
            delay={200}
            className="px-4 py-7 flex flex-col space-y-5 justify-center items-center"
          >
            <p className="text-gray-400 text-xs flex text-center">
              Unlock the perks of teaming up with a top-tier mortgage pro. Let's
              build a roadmap to skyrocket your sales and listings. Schedule a
              consultation today!
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/adrian.webb.127"
                className="w-10 h-10 rounded-full border border-white hover:border-[#006132] p-2 flex items-center justify-center hover:bg-[#006132] transition"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#ffffff] bg-transparent">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
              </a>
              <a
                href="https://www.instagram.com/adrian.webb.127/"
                className="w-10 h-10 rounded-full border border-white hover:border-[#006132] flex items-center justify-center hover:bg-[#006132] transition"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#ffffff]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/adrian-webb-492b2910/"
                className="w-10 h-10 rounded-full border border-white hover:border-[#006132] flex items-center justify-center hover:bg-[#006132] transition"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#ffffff]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </a>
              <a
                href="https://www.youtube.com/channel/UCPdDvkQzRXzOt16uQ6J3sEA"
                className="w-10 h-10 rounded-full border border-white hover:border-[#006132] flex hover:bg-[#006132] items-center justify-center transition"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#ffffff]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </span>
              </a>
            </div>

            <button
              onClick={() => setScheduleOpen(true)}
              className="flex items-center gap-3 bg-white text-[#1a1a1a] font-bold text-sm sm:text-base px-7 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform w-fit"
            >
              <img
                src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b25_ic-calendar-white.svg"
                alt="Calendar"
                className="w-5 h-5 invert"
              />
              Schedule An Intro Call Now!
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Section 4 - Questions & Answers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <FadeIn className="text-center mb-12">
            <p className="text-[#006132] uppercase tracking-[4px] font-extrabold text-sm mb-4">
              QUESTIONS & ANSWERS
            </p>
            <h2 className="text-3xl max-w-md sm:text-4xl lg:text-4xl font-bold text-[#1f1f1f] leading-tight mx-auto">
              We're Here To Find <br />
              <span className="text-[#006132]">You The Answers</span> You Need
            </h2>
          </FadeIn>

          <div className="max-w-4xl mx-auto space-y-4">
            {questions.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:border-[#006132] transition-colors">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <span className="flex-shrink-0 ml-4">
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-[#006132]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#006132]" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Get Quote / Video Section */}
      <section className="relative flex justify-center">
        <FadeIn className="bg-[#1a1a1a] md:min-w-7xl p-6 md:p-20 justify-center relative rounded-3xl overflow-hidden max-h-[320px] flex flex-col md:flex-row justify-center items-center w-full mx-4">
          <div className="absolute z-10 w-[50%] right-24 md:right-0 overflow-hidden pointer-events-none select-none">
            <img
              src="/img/logo.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none opacity-10"
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start md:text-start">
            <p className="text-gray-400 uppercase tracking-[3px] sm:tracking-[6px] font-extrabold text-md sm:text-lg mb-6 sm:mb-8">
              GET QUOTE
            </p>

            <h2 className="text-[25px] text-center md:text-start lg:text-[40px] leading-[1.2] font-semibold text-white mb-4 sm:mb-10">
              Want to learn more about <br />
              The Realtor Program?
            </h2>
          </div>

          <div className="px-4 py-7 flex flex-col space-y-5 justify-center items-center md:items-start">
            <p className="text-gray-400 text-xs flex">
              Starting your road to homeownership is literally a click away.
              Start today!
            </p>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center justify-center gap-3 border-2 border-amber-50 hover:border-[#006132] text-white font-bold text-sm sm:text-base px-7 py-4 rounded-xl hover:bg-[#006132] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full text-center md:w-fit"
            >
              <SquarePlay /> Watch Video
            </button>
          </div>
        </FadeIn>

        <div className="flex max-w-75 h-[700px] rounded-2xl items-center justify-center">
          <div className="absolute left-16 md:left-[40%]">
            {isVideoOpen && (
              <div className="rounded-2xl overflow-hidden shadow-xl lg:aspect-auto">
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute right-2 top-2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                >
                  <X className="h-8 w-8 text-white" />
                </button>
                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  onEnded={handleVideoEnd}
                  className="z-10 inset-0 max-w-90 h-[600px] object-cover rounded-2xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <Loan />
    </div>
  );
}

export default Realtor;
