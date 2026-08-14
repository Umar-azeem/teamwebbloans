import { useState } from "react";

// --- Icon Component ---
const Icon = ({ src = "", size = 20, className = "" }) => (
  <img src={src} width={size} height={size} className={className} alt="" />
);

// --- Social Media Icons ---
const icons = {
  facebook: "https://img.icons8.com/ios-filled/50/374151/facebook-new.png",
  instagram: "https://img.icons8.com/ios/50/374151/instagram-new.png",
  linkedin: "https://img.icons8.com/ios-filled/50/374151/linkedin.png",
  youtube: "https://img.icons8.com/ios-filled/50/374151/youtube-play.png",
};

// --- Event Gallery Images (Placeholder URLs - Replace with actual images) ---
const eventImages = [
  "/img/gel1.jpeg",
  "/img/gel2.jpeg",
  "/img/gel3.jpeg",
  "/img/gel4.jpeg",
  "/img/gel5.jpeg",
];

// --- Profile Data ---
const profileData = {
  name: "Adrian Webb",
  title: "Senior Mortgage Advisor",
  nmls: "NMLS-811655",
  email: "adrian@teamwebbloans.com",
  phoneLasVegas: "702-757-7599",
  phoneSeattle: "(206) 795-8411",
  description: `At Adrian Webb Mortgage Advisors, we operate on real estate time: late nights, weekends, or whenever our clients need us. Since 2004, Adrian Webb has built a career making mortgages approachable, crafting strong partnerships between clients, agents, and lenders. After starting in Las Vegas and weathering the 2008 market crash, Adrian rebuilt his career in Seattle, eventually creating a team that blends the personal touch of a boutique shop with the resources of a larger company. Today, they operate within Milestone Mortgage, leveraging the company's backing while maintaining their own team's flexibility and speed.

  Adrian leads the Seattle market while Jenna Schwartz, his sister-in-law, manages the Las Vegas/Henderson area, and Hailey Frank oversees Arizona. Together, they offer local expertise, fast turn times, and seamless communication, ensuring agents and clients feel supported every step of the way.

  The team operates like a real estate team, intuitive for agents to collaborate with, while tapping into Fannie Mae, HUD connections, and a network of 40 investors. Beyond loans, they focus on client education, creative marketing, and initiatives like The Milestone Moment on YouTube, which gives agents a platform to share stories and connect.

  With Adrian at the helm and Jenna and Hailey providing regional expertise, Adrian Webb Mortgage Advisors makes homeownership and real estate partnerships faster, easier, and more personal.`,
  featuredText: "We are a proud sponsor of our local Real Producers magazine.",
};

const eventsData = {
  publisherName: "Joli Waldeck",
  publisherTitle: "Publisher of Las Vegas Real Producers",
  description:
    "Joli Waldeck is the publisher of Las Vegas Real Producers magazine. This is the premier publication for Las Vegas' top-performing real estate agents. Through the print magazine (exclusively mailed to Las Vegas' best agents) and invite-only events, Joli connects his market's most impactful players in real estate with the area vendors who serve them best. If you're a top agent or a rising star in the industry with a unique story to tell, contact us today. And if you own a business that would benefit from getting to know Las Vegas' top real estate professionals, email joli.waldeck@n2co.com.",
};

// --- Hero Component ---
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- YouTube Video ID (Replace with your actual video ID) ---
  const videoId = "8x5kU9ot0&t"; // Replace with actual YouTube video ID
  // https://youtu.be/Q-8x5kU9ot0?si=ktui0ioOFxuY8Bkl
  // --- Carousel Navigation ---
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + eventImages.length) % eventImages.length,
    );
  };

  return (
    <div className="bg-[#006132] rounded-2xl overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* --- Hero Content --- */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* --- Left Column: Text & Social --- */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm sm:text-md py-10 font-bold tracking-[0.2em] mb-4 uppercase text-gray-200">
              Hi, I'm Adrian Webb
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-white">
              Your Local
              <br />
              Mortgage Expert
            </h1>

            <p className="text-sm sm:text-base text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Your personal mortgage guide on your quest to becoming a
              homeowner.
            </p>

            {/* --- Social Media Links --- */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-sm text-gray-300 mr-2">Connect:</span>
              <a
                href="https://www.facebook.com/adrian.webb.127"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition"
              >
                <Icon src={icons.facebook} size={18} />
              </a>
              <a
                href="https://www.instagram.com/adrian.webb.127/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition"
              >
                <Icon src={icons.instagram} size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/adrian-webb-492b2910/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition"
              >
                <Icon src={icons.linkedin} size={18} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCPdDvkQzRXzOt16uQ6J3sEA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition"
              >
                <Icon src={icons.youtube} size={18} />
              </a>
            </div>
          </div>

          {/* --- Right Column: Video & Badge --- */}
          <div className="flex-1 w-full max-w-[550px]">
            {/* --- YouTube Video Player --- */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/20">
  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/Q-8x5kU9ot0?autoplay=0&rel=0&modestbranding=1&enablejsapi=1"
      title="First-Time Homebuyers: How to Pick the Right Lender | Adrian Webb Mortgage Advisors"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>
  
  {/* --- Video Overlay Badge --- */}
  <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 shadow-lg">
    <span className="flex items-center gap-2">
      <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
      Watch Video
    </span>
  </div>
</div>
          </div>
        </div>

        {/* --- Events Gallery Carousel Section --- */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Events Gallery
            </h2>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition flex items-center justify-center"
                aria-label="Previous slide"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition flex items-center justify-center"
                aria-label="Next slide"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* --- Carousel --- */}
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {eventImages.map((image, index) => (
                <div key={index} className="min-w-full">
                  <div className="relative h-[250px] sm:h-[350px] lg:h-[400px]">
                    <img
                      src={image}
                      alt={`Event ${index + 1}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
                      <p className="text-white text-sm font-medium">
                        Event Highlight {index + 1}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* --- Carousel Dots --- */}
            <div className="flex justify-center gap-2 mt-4">
              {eventImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    currentSlide === index
                      ? "bg-white w-8"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- Customer Satisfaction Badge --- */}
        <div className="mt-8 flex items-center justify-center gap-4 text-white">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b22_Customer%20Badges.svg"
              alt="Customers"
              className="w-12 h-12 object-contain"
            />
            <div>
              <p className="text-2xl font-bold">100K+</p>
              <p className="text-sm text-gray-300">Satisfied Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main Events Component ---
// --- Main Events Component ---
export default function Events() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="bg-gray-50 font-sans antialiased  ">
      {/* Hero Section */}
      <div className="">
        <HeroSection />
      </div>

      {/* Main Content with Tabs */}
      <main className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        {/* Tabs Navigation */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="-mb-px flex flex-wrap space-x-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("profile")}
              className={`inline-flex items-center border-b-2 px-1 py-3 text-sm font-medium ${
                activeTab === "profile"
                  ? "border-[#1A365D] text-[#1A365D]"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`inline-flex items-center border-b-2 px-1 py-3 text-sm font-medium ${
                activeTab === "events"
                  ? "border-[#1A365D] text-[#1A365D]"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`inline-flex items-center border-b-2 px-1 py-3 text-sm font-medium ${
                activeTab === "contact"
                  ? "border-[#1A365D] text-[#1A365D]"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Tab Panels */}
        <div className="mt-4">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-[#1A365D]">
                      {profileData.name}
                    </h1>
                    <p className="text-lg text-gray-600">{profileData.title}</p>
                    <p className="text-sm text-gray-500">{profileData.nmls}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:${profileData.email}`}
                      className="rounded-lg bg-[#006132] px-4 py-2 text-sm font-medium text-white hover:bg-[#068045]"
                    >
                      Email Me
                    </a>
                    <a
                      href="/Realtor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-[#006132] px-4 py-2 text-sm font-medium text-[#006132] hover:bg-gray-50"
                    >
                      Realtor
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-3 text-xl font-semibold text-[#1A365D]">
                  About Adrian Webb Mortgage Advisors
                </h2>
                <div className="prose max-w-none text-gray-700">
                  {profileData.description
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph.trim()}
                      </p>
                    ))}
                </div>
                <div className="mt-4 rounded-md bg-blue-50 p-4 text-sm text-blue-800">
                  <p className="font-medium">Featured In:</p>
                  <p>{profileData.featuredText}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-md font-semibold text-[#1A365D]">
                    Las Vegas / Henderson
                  </h3>
                  <p className="text-gray-600">Contact: Jenna Schwartz</p>
                  <p className="text-gray-600">{profileData.phoneLasVegas}</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-md font-semibold text-[#1A365D]">
                    Seattle Market
                  </h3>
                  <p className="text-gray-600">Contact: Adrian Webb</p>
                  <p className="text-gray-600">{profileData.phoneSeattle}</p>
                </div>
              </div>
            </div>
          )}

          {/* Events Tab - Updated with Images */}
          {activeTab === "events" && (
            <div className="space-y-6">
              {/* Event Images Section */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-[#1A365D]">
                  Las Vegas Real Producers Events
                </h2>
                <p className="text-gray-600 mb-6">
                  We Are Proud To Host The Best Agents & Partners At Our Events
                  Throughout The Year.
                </p>
                
                {/* Two Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="relative rounded-xl overflow-hidden group">
                    <img
                      src="/img/la1.png" // Replace with your actual image path
                      alt="Real Producers Event 1"
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div>
                        <p className="text-white font-semibold text-sm">Networking Night</p>
                        <p className="text-white/80 text-xs">Las Vegas, 2025</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden group">
                    <img
                      src="/img/la6.png" 
                      alt="Real Producers Event 2"
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div>
                        <p className="text-white font-semibold text-sm">Awards Ceremony</p>
                        <p className="text-white/80 text-xs">Las Vegas, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-6 rounded-md bg-gray-50 p-8 text-center">
                  <p className="text-lg text-gray-500">
                    No upcoming events found at this time.
                  </p>
                  <p className="text-sm text-gray-400">
                    Please check back later for updates.
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-semibold text-[#1A365D]">
                  Meet The Publisher
                </h3>
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1A365D] text-3xl font-bold text-white">
                    JW
                  </div>
                  <div>
                    <p className="text-lg font-medium">
                      {eventsData.publisherName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {eventsData.publisherTitle}
                    </p>
                  </div>
                </div>
                <div className="prose mt-4 max-w-none text-gray-700">
                  <p>{eventsData.description}</p>
                </div>
                <div className="mt-4">
                  <a
                    href="mailto:joli.waldeck@n2co.com"
                    className="inline-block rounded bg-[#1A365D] px-4 py-2 text-sm font-medium text-white hover:bg-[#2A4A7D]"
                  >
                    Email Joli
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === "contact" && (
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-[#1A365D]">
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-md font-semibold text-[#1A365D]">
                    Contact Information
                  </h3>
                  <div className="mt-3 space-y-3 text-gray-700">
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-[#1A365D] hover:underline"
                      >
                        {profileData.email}
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">Las Vegas:</span>{" "}
                      {profileData.phoneLasVegas}
                    </p>
                    <p>
                      <span className="font-medium">Seattle:</span>{" "}
                      {profileData.phoneSeattle}
                    </p>
                    <p>
                      <span className="font-medium">NMLS:</span>{" "}
                      {profileData.nmls}
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://teamwebbloans.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded bg-[#1A365D] px-6 py-2 text-sm font-medium text-white hover:bg-[#2A4A7D]"
                    >
                      Visit Full Website
                    </a>
                  </div>
                </div>
                <div className="rounded-md bg-gray-50 p-4">
                  <h4 className="font-medium text-[#1A365D]">
                    Office Location
                  </h4>
                  <p className="mt-2 text-gray-700">
                    128 Union Street, Suite 101
                    <br />
                    New Bedford, MA 02740
                  </p>
                  <p className="mt-4 text-sm text-gray-500">
                    <span className="font-medium">NMLS Consumer Access:</span>{" "}
                    <a href="#" className="text-[#1A365D] hover:underline">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600 md:px-6">
          <p className="font-medium text-[#1A365D]">
            ADRIAN WEBB Mortgage Advisors
          </p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} All Rights Reserved. |{" "}
            <a href="#" className="hover:text-[#1A365D]">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-[#1A365D]">
              Legal
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
