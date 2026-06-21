import React, { useState } from "react";
import CommunitySection from "../components/community";
import EducationPanel from "../components/educlick";
import EducationSection from "../components/learnedu";
import CreditBuild from "../components/CreditBuid";
import MortgageCalculator from "../components/MortageCal";
import FAQ from "../components/Faq";
import Loan from "../components/applyLoan";
import Footer from "../components/footercontact";
import FooterText from "../components/footerText";
import ScheduleCallModal from "../components/schedulemoadal";
import QuickContactModal from "../components/quickClick";

const Icon = ({ src, size = 20, className = "" }) => (
  <img src={src} width={size} height={size} className={className} alt="" />
);

const MortgageLandingPage = () => {
  const [educationOpen, setEducationOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);

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

  return (
    <div className="p-2 sm:p-4">
      {/* HERO (background stays full-bleed, content is constrained) */}
      <div className="rounded-3xl bg-[#0a5c3a] text-white font-sans overflow-hidden relative">

        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
          <svg width="600" height="700" viewBox="0 0 600 700" fill="none">
            <path d="M100 650V100L300 400L500 100V650" stroke="white" strokeWidth="80" fill="none" />
          </svg>
        </div>

        {/* NAV */}
        <nav className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-6 gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <img
                className="w-16 sm:w-20 h-8 sm:h-10"
                src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d6f053f3aaee0cbfc8fac7_new-logo.png"
                alt="Adrian Webb logo"
              />
              <span className="text-[10px] tracking-wider font-bold">ADRIAN WEBB</span>
            </div>
            <div className="text-6xl font-bold leading-none">
              <img
                className="w-16 sm:w-20 h-10 sm:h-12"
                src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/679ad267a0889049d619622b_M%20Logo.White.png"
                alt="M logo"
              />
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 font-bold text-sm sm:text-base text-center">
            <div className="relative">
              <button
                className="flex items-center gap-2 hover:text-gray-200 transition"
                onClick={() => {
                  setEducationOpen(!educationOpen);
                  setPartnersOpen(false);
                }}
              >
                Education <Icon src={icons.chevronDown} size={16} />
              </button>
            </div>

            <div className="relative">
              <button
                className="flex items-center gap-1 hover:text-gray-200 transition"
                onClick={() => {
                  setPartnersOpen(!partnersOpen);
                  setEducationOpen(false);
                }}
              >
                Partners <Icon src={icons.chevronDown} size={16} />
              </button>
              {partnersOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 mt-4 z-50 w-64 bg-white text-gray-900 p-4 rounded-xl shadow-2xl text-left">
                  <p className="font-semibold py-2 flex justify-between">Realtor <span>{">"}</span></p>
                  <p className="font-semibold py-2 flex justify-between">Financial Planner <span>{">"}</span></p>
                  <p className="font-semibold py-2 flex justify-between">Divorce Attorney <span>{">"}</span></p>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-gray-200 transition">Required Documentation List</a>
          </div>

        
          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 w-full lg:w-auto">
            <a href="tel:2067958411" className="flex items-center gap-2 hover:text-gray-200 transition">
              <img
                src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b87_phone-white.svg"
                alt="phone icon"
              />
              <span className="font-bold whitespace-nowrap">(206) 795-8411</span>
            </a>
            <button 
             onClick={() => setApplyOpen(true)}
            className="w-full sm:w-auto bg-white text-[#054128] px-6 py-3 rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1">
              Apply Now
            </button>
          </div>
        </nav>

        {educationOpen && (
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EducationPanel />
          </div>
        )}

        
        <main className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6 lg:px-8 pt-12 pb-20 gap-10">
          <div className="flex-1 max-w-2xl w-full text-center lg:text-left">
            <p className="text-md font-bold tracking-[0.2em] mb-6 uppercase">
              Hi, I'm Adrian Webb
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Your Local
              <br />
              Mortgage Expert
            </h1>

            <p className="text-sm sm:text-base text-gray-200 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Your personal mortgage guide on your quest to becoming a homeowner. Click the links below to start your journey with me.
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
                onClick={() => setContactOpen(true)}
               className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-white/30 px-6 py-4 rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1">
                Quick Contact
                <img
                  src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b0d_ic-arrow-forward-white.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </div>

          {/* Hero image + floating cards */}
          <div className="flex-1 relative flex justify-center lg:justify-end items-end w-full">
            <div className="absolute -top-2 sm:top-10 left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0 lg:-left-4 xl:-left-16 z-20 flex items-center gap-2">
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

            <div className="relative w-full max-w-[450px]">
              <img
                src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d510dfb82945f90c2aa788_Adrian%20Webb%20WMS-p-1080.png"
                alt="Adrian Webb"
                className="w-full h-[400px] sm:h-[480px] lg:h-[550px] object-cover object-top rounded-2xl"
                style={{
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />

              <div className="absolute bottom-4 sm:bottom-8 right-0 left-0 sm:left-auto mx-auto sm:mx-0 bg-white text-gray-900 p-5 sm:p-6 rounded-2xl shadow-2xl w-[88%] sm:w-64">
                <h3 className="text-xl font-bold mb-2">Adrian Webb</h3>
                <p className="text-gray-600 text-sm mb-1">Senior Mortgage Advisor</p>
                <p className="text-gray-500 text-xs mb-1">NMLS ID: 811655</p>
                <p className="text-gray-500 text-xs mb-4">NMLS CO ID: 1815656</p>

                <div className="flex items-center gap-3">
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    <Icon src={icons.facebook} size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    <Icon src={icons.instagram} size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    <Icon src={icons.linkedin} size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    <Icon src={icons.youtube} size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      
      <div className="max-w-7xl mx-auto">
        <CommunitySection setScheduleOpen={setScheduleOpen}  />
        <EducationSection setScheduleOpen={setScheduleOpen} setContactOpen={setContactOpen} />
        <CreditBuild setScheduleOpen={setScheduleOpen} setContactOpen={setContactOpen} />
        <MortgageCalculator setContactOpen={setContactOpen} />
        <FAQ />
        <Loan setScheduleOpen={setScheduleOpen} />
        <Footer />
        <FooterText />
      </div>

      {scheduleOpen && <ScheduleCallModal onClose={() => setScheduleOpen(false)} />}
          {contactOpen && <QuickContactModal onClose={() => setContactOpen(false)} />}
    {applyOpen && (
  <div className="fixed inset-0 z-50 bg-white text-black overflow-auto">

    <button
      onClick={() => setApplyOpen(false)}
      className="absolute top-3 right-3 sm:top-4 sm:right-4 text-black text-xl font-bold"
    >
      ✕
    </button>

    {/* ONLY RESPONSIVE CHANGES HERE */}
    <div className="px-4 sm:px-6 lg:px-6 py-4 sm:py-6">

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
        403 ERROR
      </h1>

      <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6">
        The request could not be satisfied.
      </h2>

      <hr className="border-gray-300 mb-4 sm:mb-6" />

      {/* EXACT SAME CONTENT */}
      <p className="leading-normal text-[14px] sm:text-[15px] max-w-none">
        The Amazon CloudFront distribution is configured to block access from your country.
        We can't connect to the server for this app or website at this time. There might be too much traffic or a configuration error.
        Try again later, or contact the app or website owner.
      </p>

      <p className="mb-4 sm:mb-6 leading-normal text-[14px] sm:text-[15px] max-w-none">
        If you provide content to customers through CloudFront, you can find steps to troubleshoot and help prevent this error by reviewing the CloudFront documentation.
      </p>

      <hr className="border-gray-300 mb-4 sm:mb-6" />

      <p className="text-xs sm:text-sm text-gray-800">
        Generated by cloudfront (CloudFront)
      </p>

      <p className="text-xs sm:text-sm text-gray-800 mt-1 break-words sm:break-all">
        Request ID: xkZD4z0LmQpZ_QBseDXBD0zhuNFpeGh-AFVRPE7r5DYC0yCavG33vw==
      </p>

    </div>
  </div>
)}
    </div>
  );
};

export default MortgageLandingPage;