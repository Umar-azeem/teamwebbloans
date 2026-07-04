// LocationFinder.jsx
import  { useState } from 'react';
import { MapPin, ExternalLink, Calendar, Phone, Mail } from 'lucide-react';
import '../src/LocationFinder.css';
import ScheduleCallModal from './scheduleCallModal';

// Office Address
const OFFICE_ADDRESS = "28 Union Street, Suite 101, New Bedford, MA 02740";
const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(OFFICE_ADDRESS);
const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(OFFICE_ADDRESS) +
  "&output=embed";

const Icon = ({ src, size = 20, className = "" }) => (
  <img src={src} width={size} height={size} className={className} alt="" />
);

const icons = {
  phone: "https://img.icons8.com/ios/50/ffffff/phone.png",
  calendar: "https://img.icons8.com/ios/50/0a5c3a/calendar.png",
  arrowRight: "https://img.icons8.com/ios/50/ffffff/forward--v1.png",
  facebook: "https://img.icons8.com/ios-filled/50/374151/facebook-new.png",
  instagram: "https://img.icons8.com/ios/50/374151/instagram-new.png",
  linkedin: "https://img.icons8.com/ios-filled/50/374151/linkedin.png",
  youtube: "https://img.icons8.com/ios-filled/50/374151/youtube-play.png",
};

const LocationFinder = () => {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <main className="relative z-10 bg-[#006132] rounded-2xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center px-0 sm:px-6 lg:px-8 pt-18 pb-20 gap-10">
        <div className="flex-1 max-w-2xl w-full text-center px-4 lg:text-left">
          <div className="hidden md:flex flex-col">
            <p className="text-md font-bold tracking-[0.2em] mb-6 uppercase text-white/80">
              Hi, I'm Adrian Webb
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              Your Local
              <br />
              Mortgage Expert
            </h1>
          </div>

          <p className="text-sm sm:text-base text-gray-200 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Your personal mortgage guide on your quest to becoming a homeowner.
            Click the links below to start your journey with me.
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
              className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-white/30 px-6 py-4 rounded-xl font-semibold text-white transition transform duration-300 hover:-translate-y-1"
            >
              Quick Contact
              <img
                src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b0d_ic-arrow-forward-white.svg"
                alt="arrow"
              />
            </button>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center lg:justify-end items-end w-full">
          <div className="absolute hidden -top-2 sm:top-10 left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0 lg:-left-4 xl:-left-16 z-20 md:flex items-center gap-2">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">100K+</h2>
          </div>

          <div className="relative w-full max-w-[450px]">
            <div className="flex flex-col text-center p-6 md:hidden">
              <p className="text-md font-bold tracking-[0.2em] mb-6 uppercase text-white/80">
                Hi, I'm Adrian Webb
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                Your Local
                <br />
                Mortgage Expert
              </h1>
            </div>

            <img
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d510dfb82945f90c2aa788_Adrian%20Webb%20WMS-p-1080.png"
              alt="Adrian Webb"
              className="min-w-full h-[500px] sm:h-[480px] lg:h-[550px] object-cover object-top rounded-2xl"
              style={{
                maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />

            <div className="absolute bottom-4 flex flex-col justify-center sm:bottom-8 right-0 left-0 sm:left-auto mx-auto sm:mx-0 bg-white text-gray-900 p-5 sm:p-2 rounded-2xl shadow-2xl w-[70%] sm:w-64">
              <h3 className="text-lg font-bold mb-2">Adrian Webb</h3>
              <p className="text-gray-600 text-sm mb-1">
                Senior Mortgage Advisor
              </p>
              <p className="text-gray-500 text-xs mb-1">NMLS ID: 811655</p>
              <p className="text-gray-500 text-xs mb-4">NMLS CO ID: 1815656</p>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/adrian.webb.127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Icon src={icons.facebook} size={18} />
                </a>
                <a
                  href="https://www.instagram.com/adrian.webb.127/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Icon src={icons.instagram} size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/adrian-webb-492b2910/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Icon src={icons.linkedin} size={18} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCPdDvkQzRXzOt16uQ6J3sEA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Icon src={icons.youtube} size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Location Section */}
      <div className="locator-container">
        <div className="page-header">
          <h1>
            <MapPin className="inline-block w-8 h-8 text-[#006132] mr-3" />
            Find Our Location
          </h1>
          <p>Visit us at our office in New Bedford, MA. We're here to help you with all your mortgage needs.</p>
        </div>

        {/* Location Card */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Address / info panel */}
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <div className="w-12 h-12 bg-[#006132]/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#006132]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Our Office
              </h3>
              <p className="text-gray-700 mb-2 text-lg">{OFFICE_ADDRESS}</p>
              
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-4 h-4 text-[#006132]" />
                  <span>(508) 555-0123</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-4 h-4 text-[#006132]" />
                  <span>info@teamwebbloans.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="w-4 h-4 text-[#006132]" />
                  <span>Mon-Fri: 9AM - 6PM</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#006132] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#004d26] transition"
                >
                  Get Directions
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setScheduleOpen(true)}
                  className="inline-flex items-center gap-2 border-2 border-[#006132] text-[#006132] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#006132] hover:text-white transition"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Visit
                </button>
              </div>
            </div>

            {/* Embedded map */}
            <div className="h-64 md:h-full min-h-[280px]">
              <iframe
                title="Office location map"
                src={MAPS_EMBED_URL}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-[#006132]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-[#006132]" />
            </div>
            <h4 className="font-bold text-gray-900 mb-1">Visit Us</h4>
            <p className="text-sm text-gray-600">Schedule an in-person consultation at our office.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-[#006132]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-[#006132]" />
            </div>
            <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
            <p className="text-sm text-gray-600">Speak directly with our team for immediate assistance.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-[#006132]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-[#006132]" />
            </div>
            <h4 className="font-bold text-gray-900 mb-1">Online Scheduling</h4>
            <p className="text-sm text-gray-600">Book a virtual or in-person appointment online.</p>
          </div>
        </div>
      </div>

      {/* Schedule Call Modal */}
      <ScheduleCallModal
        isOpen={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
        onConfirm={(appointmentDetails) => {
          console.log("Appointment confirmed:", appointmentDetails);
        }}
      />
    </>
  );
};

export default LocationFinder;