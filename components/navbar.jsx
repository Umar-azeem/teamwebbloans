import { useState, useEffect } from "react";
import EducationPanel from "./educlick";
import PartnersPanel from "./Partnerspanel";
import { Link } from "react-router-dom";

// ── Desktop Partners dropdown ─────────────────────────────────────────────────
function DesktopPartnersDropdown({ onClose }) {
  return (
    <div className="absolute top-full left-0 mt-4 z-50 w-64 bg-white text-gray-900 rounded-xl shadow-2xl overflow-hidden">
      {[
        { label: "Realtor", href: "/realtor" },
        { label: "Financial Planner", href: "/FinancialPlanner" },
        { label: "Divorce Attorney", href: "/DivorceAttorney" },
      ].map((item) => (
        <Link
          key={item.label}
          to={item.href}
          rel="noreferrer"
          onClick={onClose}
          className="flex items-center justify-between px-5 py-3 font-semibold text-sm border-b border-gray-100 last:border-0 hover:bg-gray-50 transition"
        >
          {item.label}
          <span className="text-[#006132]">›</span>
        </Link>
      ))}
    </div>
  );
}

// ── Mobile full-screen menu ───────────────────────────────────────────────────
function MobileMenu({
  open,
  onClose,
  onApply,
  onEducationOpen,
  onPartnersOpen,
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#006132] flex flex-col transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-5">
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="text-white hover:text-gray-300 transition"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="flex flex-col items-center   ">
          <img
            src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d6f053f3aaee0cbfc8fac7_new-logo.png"
            alt="Adrian Webb Logo"
            className="w-18"
          />
          <p className="font-bold text-[9px]">ADRIAN WEBB</p>
          <p className="text-[5px]">Mortgage Advisors</p>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col px-6 mt-6 gap-1 flex-1">
        {/* Home */}
        <Link
          to="/"
          onClick={onClose}
          className="flex items-center justify-between text-white font-bold text-2xl py-5 border-b border-white/20 hover:text-gray-200 transition"
        >
          Home 
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>

        {/* Education */}
        <button
          onClick={onEducationOpen}
          className="flex items-center justify-between text-white font-bold text-2xl py-5 border-b border-white/20 hover:text-gray-200 transition w-full text-left"
        >
          Education
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        {/* Partners Program */}
        <button
          onClick={onPartnersOpen}
          className="flex items-center justify-between text-white font-bold text-2xl py-5 border-b border-white/20 hover:text-gray-200 transition w-full text-left"
        >
          Partners Program
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </nav>

      {/* Bottom CTA */}
      <div className="px-6 pb-10 pt-6 flex flex-col gap-4">
        <Link
          to="tel:2067958411"
          className="flex items-center gap-3 text-white font-bold text-lg hover:text-gray-200 transition"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          (206) 795-8411
        </Link>
        <button
          onClick={() => {
            onClose();
            onApply();
          }}
          className="self-start bg-white text-[#006132] font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          Apply Now
        </button>
      </div>

      {/* Watermark */}
      <div className="absolute bottom-8 right-6 opacity-10 pointer-events-none">
        <img
          src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/679ad267a0889049d619622b_M%20Logo.White.png"
          alt=""
          className="w-40 h-auto"
        />
      </div>
    </div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileEducationOpen, setMobileEducationOpen] = useState(false);
  const [mobilePartnersOpen, setMobilePartnersOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDesktopAll = () => {
    setEducationOpen(false);
    setPartnersOpen(false);
  };

  return (
    <>
      {/* ── Desktop / tablet navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
          ${scrolled ? "bg-[#006132] shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white hover:text-gray-200 transition"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Desktop logo */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex flex-col items-center">
              <img
                className="w-16 sm:w-20 h-8 sm:h-10 object-contain"
                src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d6f053f3aaee0cbfc8fac7_new-logo.png"
                alt="Adrian Webb logo"
              />
              <span className="text-[10px] tracking-wider font-bold text-white">
                ADRIAN WEBB
              </span>
            </div>
            <img
              className="w-16 sm:w-20 h-10 sm:h-12 object-contain"
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/679ad267a0889049d619622b_M%20Logo.White.png"
              alt="M logo"
            />
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-10 font-bold text-sm text-white">
            {/* Education */}
            <div className="relative">
              <button
                className="flex items-center gap-1 hover:text-gray-200 transition"
                onClick={() => {
                  setEducationOpen(!educationOpen);
                  setPartnersOpen(false);
                }}
              >
                Education
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${educationOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>

            {/* Partners */}
            <div className="relative">
              <button
                className="flex items-center gap-1 hover:text-gray-200 transition"
                onClick={() => {
                  setPartnersOpen(!partnersOpen);
                  setEducationOpen(false);
                }}
              >
                Partners
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${partnersOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {partnersOpen && (
                <DesktopPartnersDropdown onClose={closeDesktopAll} />
              )}
            </div>

            <Link
              to="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/67364b7d6d3b1b1c907a9e0d_Required%20Documentation%20List.pdf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-200 transition"
            >
              Required Documentation List
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Mobile icon buttons */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="tel:2067958411"
                aria-label="Call us"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#006132] transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </Link>
              <button
                aria-label="Schedule appointment"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#006132] transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </button>
            </div>

            {/* Desktop phone + Apply Now */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                to="tel:2067958411"
                className="flex items-center gap-2 text-white font-bold hover:text-gray-200 transition"
              >
                <img
                  src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b87_phone-white.svg"
                  alt=""
                  className="w-4 h-4"
                />
                (206) 795-8411
              </Link>
              <button
                onClick={() => setApplyOpen(true)}
                className="bg-white text-[#006132] px-6 py-3 rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Education mega panel */}
        {educationOpen && (
          <div className="hidden lg:block">
            <EducationPanel onClose={closeDesktopAll} />
          </div>
        )}
      </nav>

      {/* Click outside to close desktop dropdowns */}
      {(educationOpen || partnersOpen) && (
        <div className="fixed inset-0 z-40" onClick={closeDesktopAll} />
      )}

      {/* ── Green mobile slide-in menu ── */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onApply={() => setApplyOpen(true)}
        onEducationOpen={() => {
          setMobileOpen(false);
          setMobileEducationOpen(true);
        }}
        onPartnersOpen={() => {
          setMobileOpen(false);
          setMobilePartnersOpen(true);
        }}
      />

      {/* ── Mobile Education full-screen panel ── */}
      {mobileEducationOpen && (
        <div className="lg:hidden">
          <EducationPanel onClose={() => setMobileEducationOpen(false)} />
        </div>
      )}

      {/* ── Mobile Partners full-screen panel ── */}
      {mobilePartnersOpen && (
        <div className="lg:hidden">
          <PartnersPanel
            mobile={true}
            onClose={() => setMobilePartnersOpen(false)}
          />
        </div>
      )}

      {/* ── Apply Now modal ── */}
      {applyOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/50 flex items-center justify-center p-4"
          onClick={() => setApplyOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-[#006132] mb-2">
              Apply Now
            </h2>
            <p className="text-gray-500 mb-6">
              Start your mortgage application with Adrian Webb.
            </p>
            <button
              onClick={() => setApplyOpen(false)}
              className="w-full bg-[#006132] text-white py-3 rounded-xl font-semibold hover:bg-[#004d26] transition"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
}
