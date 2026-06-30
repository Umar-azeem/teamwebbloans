import { useState } from "react";

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

export default function ApplicationProcess({ setScheduleOpen }) {
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
           <div className="text-center mb-12">
            <p className="text-[#006132] uppercase tracking-[4px] font-extrabold text-sm mb-4">
               Application Process
            </p>
            <h2 className="text-3xl max-w-md sm:text-4xl lg:text-4xl font-bold text-[#1f1f1f] leading-tight  mx-auto">
              A Reliable Loan Process You And Your Clients Can Believe In.
            </h2>
            <p className="text-gray-500  mt-4 max-w-lg mx-auto text-sm sm:text-base">
               With our tried and tested loan process, your clients can get
              pre-approved for their mortgage in just 5 easy steps:
            </p>
          </div>
           
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