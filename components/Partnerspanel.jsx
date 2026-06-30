import { X,  ChevronRight } from "lucide-react";
 
const partners = [
  {
    label: "Realtor",
    href: "/Realtor",
  },
  {
    label: "Financial Planner ",
    href: "/FinancialPlanner",
  },
  {
    label: "Divorce Attorney",
    href: "/DivorceAttorney",
  },
];

const Logo = () => (
  <img
    src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d6f053f3aaee0cbfc8fac7_new-logo.png"
    alt="Adrian Webb"
    className="h-12 w-auto"
  />
);

// ── Mobile full-screen Partners panel ─────────────────────────────────────────
const MobilePartnersPanel = ({ onClose }) => (
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
      <span className="font-bold text-gray-900"> / Partners Program</span>
    </div>

    {/* Title */}
    <h1 className="px-5 pt-3 pb-6 text-3xl font-bold text-gray-900">Partners Program</h1>

    {/* Partner buttons */}
    <div className="flex flex-col px-5 gap-3 pb-10">
      {partners.map((item) => (
        <a
          key={item.label}
          href={item.href}
          
          rel="noreferrer"
          className="w-full bg-[#006132] text-white font-bold text-lg py-5 px-6 rounded-2xl flex items-center justify-between hover:bg-[#004d26] transition"
        >
          {item.label}
          <ChevronRight size={20} className="flex-shrink-0" />
        </a>
      ))}
    </div>
  </div>
);

const DesktopPartnersPanel = ({ onClose }) => (
  <div className="absolute top-full left-0 mt-4 z-50 w-64 bg-white text-gray-900 rounded-xl shadow-2xl overflow-hidden">
    {partners.map((item) => (
      <a
        key={item.label}
        href={item.href}
        target="_blank"
        rel="noreferrer"
        onClick={onClose}
        className="flex items-center justify-between px-5 py-3 font-semibold text-sm border-b border-gray-100 last:border-0 hover:bg-gray-50 transition"
      >
        {item.label}
        <span className="text-[#006132]">›</span>
      </a>
    ))}
  </div>
);

// ── Main export — renders correct version based on screen ─────────────────────
const PartnersPanel = ({ onClose, mobile = false }) => {
  if (mobile) return <MobilePartnersPanel onClose={onClose} />;
  return <DesktopPartnersPanel onClose={onClose} />;
};

export default PartnersPanel;