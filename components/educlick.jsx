import { Play, X, ArrowLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const categories = [
  "First Time Homebuyer",
  "Mortgage 101",
  "Credit Building",
  "Rent vs. Buy",
  "Building Wealth Around Real Estate",
  "Your Mortgage Team",
  "Refinancing",
  "Home Seller",
  "Self-Employed Home Buyer",
  "Non-Traditional Home Buyer",
  "Veteran",
  "Mortage Hacks",
];

const categoryContent = {
  "First Time Homebuyer": {
    mainTitle: "3 Things To Avoid After You Apply For A Loan",
    secondTitle: "What You Need To Get Pre-Qualified",
    moreTitle: "See more educational materials",
    image: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d509901b89bb3fd2a62d4d_pexels-alena-darmel-7641900.jpg",
  },
  "Mortgage 101": {
    mainTitle: "3 Types Of Mortgages You Need To Know",
    secondTitle: "Moving Out Of State? Use This Roadmap",
    moreTitle: "See more educational materials",
    image: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d509901b89bb3fd2a62d50_pexels-cottonbro-studio-3943716.jpg",
  },
  "Credit Building": {
    mainTitle: "How To Fix Your Credit (So You Can Buy A Home)",
    secondTitle: "Recipe For The Highest Credit Score",
    moreTitle: "See more educational materials",
    image: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d509901b89bb3fd2a62d52_pexels-expect-best-323780.jpg",
  },
  "Rent vs. Buy": {
    mainTitle: "Top Tax Benefits Of Owning A Home",
    secondTitle: "3 Ways To Afford The Closing Costs On Your First Home",
    moreTitle: "See more educational materials",
    image: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d509901b89bb3fd2a62d4c_pexels-pixabay-265087.jpg",
  },
  "Building Wealth Around Real Estate": {
    mainTitle: "How To Invest In Real Estate With Home Equity",
    secondTitle: "Appreciation Vs. Depreciation: What You Need To Know",
    moreTitle: "See more educational materials",
    image: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d509901b89bb3fd2a62d4e_pexels-binyamin-mellish-1396122-p-2600.jpg",
  },
  "Your Mortgage Team": {
    mainTitle: "7 Questions To Ask Your Lender",
    secondTitle: "What Are The Stages Of The Mortgage Process?",
    moreTitle: "See more educational materials",
    image: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d509901b89bb3fd2a62d4a_pexels-mikhail-nilov-7731323-p-3200.jpg",
  },
  Refinancing: {
    mainTitle: "A Home Is Your Safety Net",
    secondTitle: "The Most Common Refinancing Myths",
    moreTitle: "See more educational materials",
    image: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d509901b89bb3fd2a62d51_pexels-curtis-adams-3288102-p-3200.jpg",
  },
  "Home Seller": {
    mainTitle: "How To Get Top Dollar For Your Home",
    secondTitle: "Don't Belive These Cash Offer Myths",
    moreTitle: "See more educational materials",
    image: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d509901b89bb3fd2a62d55_pexels-cowomen-2041627-p-2600.jpg",
  },
  "Self-Employed Home Buyer": {
    mainTitle: "How To Get A Mortgage If You're Self Employed",
    secondTitle: "Self-Employed? Here's What You Need To Get A Mortgage",
    moreTitle: "See more educational materials",
    image: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d509901b89bb3fd2a62d53_pexels-george-milton-7014337-p-2600.jpg",
  },
  "Non-Traditional Home Buyer": {
    mainTitle: "If You Keep Getting Turned Down For A Home Loan...Try This",
    secondTitle: "What's A Non-Traditional Homebuyer?",
    moreTitle: "See more educational materials",
    image: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d509901b89bb3fd2a62d4f_pexels-kindel-media-7578847-p-2600.jpg",
  },
  Veteran: {
    mainTitle: "Top VA Loan Benefits",
    secondTitle: "How To Get Qualified For A VA Loan",
    moreTitle: "See more educational materials",
    image: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d509901b89bb3fd2a62d54_pexels-mike-jones-8806069-p-2000.jpg",
  },
  "Mortage Hacks": {
    mainTitle: "How To Avoid Paying Private Mortgage Insurance",
    secondTitle: "Buy A Home With Less Up Front",
    moreTitle: "See more educational materials",
    image: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d509901b89bb3fd2a62d4b_pexels-cottonbro-4098224-p-2600.jpg",
  },
};

// ── Logo ──────────────────────────────────────────────────────────────────────
const Logo = () => (
  <img
    src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d6f053f3aaee0cbfc8fac7_new-logo.png"
    alt="Adrian Webb"
    className="h-12 w-auto"
  />
);

// ── Content cards (desktop + mobile detail view) ──────────────────────────────
const ContentCards = ({ content, selectedCategory }) => (
  <div className="flex flex-col max-w-2xl gap-4 ">
    {/* Main video card */}
    <div className="bg-white p-6 sm:p-8 flex items-center justify-between gap-6 rounded-2xl">
      <div className="flex flex-col gap-4 sm:gap-6">
        <h2 className="text-base sm:text-xl font-bold text-gray-900 leading-tight max-w-[260px]">
          {content.mainTitle}
        </h2>
        <button className="flex items-center gap-2 bg-[#006132] text-white font-bold rounded-xl mt-4 sm:mt-16 px-4 sm:px-6 py-2 sm:py-3 w-fit hover:bg-[#0c3f27] text-sm transition">
          <Play size={16} fill="white" />
          Play Video
        </button>
      </div>
      <img
        src={content.image}
        alt={selectedCategory}
        className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-2xl flex-shrink-0"
      />
    </div>

    {/* Two bottom cards */}
    <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-1">
      <div className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between gap-4">
        <h3 className="text-base sm:text-xl font-bold text-gray-900 leading-snug">
          {content.secondTitle}
        </h3>
        <button className="flex items-center gap-2 bg-[#006132] text-white font-bold rounded-xl px-4 sm:px-6 py-2 sm:py-3 w-fit hover:bg-[#0c3f27] text-sm transition">
          <Play size={16} fill="white" />
          Play Video
        </button>
      </div>
      <div className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between gap-4">
        <div>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">More</p>
          <h3 className="text-[14px] sm:text-xl font-bold text-gray-900 leading-snug">
            {content.moreTitle}
          </h3>
        </div>
        <button className="flex items-center gap-2 bg-[#006132] text-white font-bold rounded-xl px-4 sm:px-6 py-2 sm:py-3 w-fit hover:bg-[#0c3f27] text-sm transition">
          Explore
          <img
            src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b0d_ic-arrow-forward-white.svg"
            alt="arrow"
          />
        </button>
      </div>
    </div>
  </div>
);

// ── Mobile: category list screen ──────────────────────────────────────────────
const MobileCategoryList = ({ onSelect, onClose }) => (
  <div className=" fixed inset-0 z-[150] bg-white flex flex-col overflow-y-auto">
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
      <span className="font-bold text-gray-900"> / Educational Content</span>
    </div>

    {/* Title */}
    <h1 className="px-5 pt-3 pb-6 text-3xl font-bold text-gray-900">Educational Content</h1>

    {/* Category buttons */}
    <div className="flex flex-col px-5 gap-3 pb-10">
      {categories.map((label) => (
        <button
          key={label}
          onClick={() => onSelect(label)}
          className="w-full bg-[#006132] text-white font-bold text-lg py-5 px-6 rounded-2xl text-left hover:bg-[#004d26] transition flex items-center justify-between"
        >
          {label}
          <ChevronRight size={20} className="flex-shrink-0" />
        </button>
      ))}
    </div>
  </div>
);

// ── Mobile: category detail screen ────────────────────────────────────────────
const MobileCategoryDetail = ({ category, onBack, onClose }) => {
  const content = categoryContent[category] || categoryContent["Mortgage 101"];
  return (
    <div className="fixed inset-0 z-[160] bg-white flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
        <button onClick={onBack} className="text-gray-500 hover:text-gray-800 transition">
          <ArrowLeft size={26} />
        </button>
        <Logo />
      </div>

      {/* Breadcrumb */}
      <div className="px-5 pt-5 pb-2 text-sm text-gray-500">
        <span className="hover:underline cursor-pointer" onClick={onClose}>Home</span>
        <span> / </span>
        <span className="hover:underline cursor-pointer" onClick={onBack}>Educational Content</span>
        <span> / </span>
        <span className="font-bold text-gray-900">{category}</span>
      </div>

      {/* Title */}
      <h1 className="px-5 pt-3 pb-6 text-3xl font-bold text-gray-900">{category}</h1>

      {/* Content cards */}
      <div className="px-5 pb-10">
        <ContentCards content={content} selectedCategory={category} />
      </div>
    </div>
  );
};

// ── Main EducationPanel ───────────────────────────────────────────────────────
const EducationPanel = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("Mortgage 101");
  const [mobileView, setMobileView] = useState("list"); // "list" | "detail"
  const [mobileCategory, setMobileCategory] = useState(null);

  const handleMobileSelect = (label) => {
    setMobileCategory(label);
    setMobileView("detail");
  };

  return (
    <>
      {/* ── Mobile: list screen ── */}
      {mobileView === "list" && (
        <div className="lg:hidden">
          <MobileCategoryList
            onSelect={handleMobileSelect}
            onClose={onClose}
          />
        </div>
      )}

      {/* ── Mobile: detail screen ── */}
      {mobileView === "detail" && mobileCategory && (
        <div className="lg:hidden">
          <MobileCategoryDetail
            category={mobileCategory}
            onBack={() => setMobileView("list")}
            onClose={() => { setMobileView("list"); onClose && onClose(); }}
          />
        </div>
      )}

      {/* ── Desktop: mega panel ── */}
    <div className="p-2"><div className=" hidden lg:block w-full bg-[#006132] p-6 shadow-2xl ">
        <div className="grid grid-cols-[1.9fr_2fr] gap-6 max-w-7xl mx-auto ">
          {/* Left: category grid */}
          <div className=" grid grid-cols-2 gap-4 content-start">
            {categories.map((label) => (
              <button
                key={label}
                onClick={() => setSelectedCategory(label)}
                className={`rounded-2xl px-10 py-8 text-center font-bold text-sm leading-snug transition-colors ${
                  selectedCategory === label
                    ? "bg-green-400 text-black"
                    : "bg-white text-black hover:bg-green-400"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Right: content cards */}
          <ContentCards
            content={categoryContent[selectedCategory] || categoryContent["Mortgage 101"]}
            selectedCategory={selectedCategory}
          />
        </div>
      </div></div> 
    </>
  );
};

export default EducationPanel;