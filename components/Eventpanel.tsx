import { X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
 
const events = [
  {
    label: "Events",
    href: "/Events",
  }, 
  {
    label: "Monitor Plays",
    href: "/MonitorPlays",
  },
  {
    label: "Locations",
    href: "/Location",
  },
  {
    label: "Tools",
    href: "/Tools",
  },
];

const Logo = () => (
  <img
    src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d6f053f3aaee0cbfc8fac7_new-logo.png"
    alt="Adrian Webb"
    className="h-12 w-auto"
  />
);

// ── Mobile full-screen Events panel ─────────────────────────────────────────
const MobileEventsPanel = ({ onClose }) => (
  <div className="fixed inset-0 z-[150] bg-white flex flex-col overflow-y-auto">
    {/* Header */}
    <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
      <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition">
        <X size={26} />
      </button>
      <Logo />
    </div>

    {/* Breadcrumb */}
    <div className="px-5 pt-5 pb-2 text-sm text-gray-500">
      <span className="hover:underline cursor-pointer" onClick={onClose}>Home</span>
      <span className="font-bold text-gray-900"> / Events Program</span>
    </div>

    {/* Title */}
    <h1 className="px-5 pt-3 pb-6 text-3xl font-bold text-gray-900">Events Program</h1>

    {/* Event buttons */}
    <div className="flex flex-col px-5 gap-3 pb-10">
      {events.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          rel="noreferrer"
          onClick={onClose}
          className="w-full bg-[#006132] text-white font-bold text-lg py-5 px-6 rounded-2xl flex items-center justify-between hover:bg-[#004d26] transition"
        >
          {item.label}
          <ChevronRight size={20} className="flex-shrink-0" />
        </Link>
      ))}
    </div>
  </div>
);

const DesktopEventsPanel = ({ onClose }) => (
  <div className="absolute top-full left-0 mt-4 z-50 w-64 bg-white text-gray-900 rounded-xl shadow-2xl overflow-hidden">
    {events.map((item) => (
      <Link
        key={item.label}
        to={item.href}
        onClick={onClose}
        className="flex items-center justify-between px-5 py-3 font-semibold text-sm border-b border-gray-100 last:border-0 hover:bg-gray-50 transition"
      >
        {item.label}
        <span className="text-[#006132]">›</span>
      </Link>
    ))}
  </div>
);

// ── Main export — renders correct version based on screen ─────────────────────
const EventsPanel = ({ onClose, mobile = false }) => {
  if (mobile) return <MobileEventsPanel onClose={onClose} />;
  return <DesktopEventsPanel onClose={onClose} />;
};

export default EventsPanel;