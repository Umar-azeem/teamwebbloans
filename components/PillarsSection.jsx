import { useState } from "react";

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

export default function PillarsSection({ setScheduleOpen }) {
  const [activeId, setActiveId] = useState(3);
  const [playing, setPlaying] = useState(false);

  const activeVideo = videos.find((v) => v.id === activeId) || videos[0];

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-[#006132] uppercase tracking-[4px] font-extrabold text-sm mb-4">
            How It Works
          </p>
          <h2 className="text-3xl max-w-md sm:text-4xl lg:text-4xl font-bold text-[#1f1f1f] leading-tight  mx-auto">
            Unlock the 5 Pillars of a Killer Realtor–Mortgage Pro Partnership!
          </h2>
          <p className="text-gray-500  mt-4 max-w-lg mx-auto text-sm sm:text-base">
            Ready to supercharge your Realtor game? Dive into our 5-part video
            series to discover how the right mortgage pro can be your ultimate
            win-win.
          </p>
        </div>

        {/* Accordion + Preview */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center ">
          {/* Left — Accordion list */}
          <div className="w-full lg:w-[40%] flex flex-col gap-3">
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
                      ? "bg-[#006132] text-white border-[#006132] shadow-md "
                      : "bg-white text-[#1f1f1f] border-gray-200 hover:bg-[#006132] hover:border-[#006132] hover:shadow-md"
                  }`}
                >
                  {/* Logo watermark shown on active or hover */}
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
          </div>

          {/* Right — Video preview card */}
          <div className="w-[320px] h-[500px]">
            <div className="relative rounded-2xl overflow-hidden bg-[#006132]  shadow-xl  lg:aspect-auto h-[540px]">
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

        <div className="flex justify-center mt-20">
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
        </div>
      </div>
    </section>
  );
}
