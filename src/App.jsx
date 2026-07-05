"use client";
import { useState } from "react";
import EducationPanel from "../components/educlick";
import ScheduleCallModal from "../components/ScheduleCallModal";
import QuickContactModal from "../components/quickClick";
import Navbar from "../components/navbar";
import { Routes, Route, } from "react-router-dom";
import Home from "../components/Home";
import Realtor from "../components/Realtor.jsx";
import Footer from "../components/footercontact.jsx";
import FooterText from "../components/footerText.jsx";
import FinancialPlanner from "../components/FinancialPlanner.jsx";
import DivorceAttorney from "../components/Divorceattorney.jsx";
import Tools from "../components/Tools.jsx";
import Location from "../components/Location.jsx";

const MortgageLandingPage = () => {
  const [educationOpen, setEducationOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="p-2">
      <div className="rounded-3xl text-white font-sans overflow-hidden relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
          <svg width="600" height="700" viewBox="0 0 600 700" fill="none">
            <path
              d="M100 650V100L300 400L500 100V650"
              stroke="white"
              strokeWidth="80"
              fill="none"
            />
          </svg>
        </div>
        <Navbar
          educationOpen={educationOpen}
          setEducationOpen={setEducationOpen}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setScheduleOpen={setScheduleOpen}
                setContactOpen={setContactOpen}
                setEducationOpen={setEducationOpen}
              />
            }
          />
          <Route path="/Realtor" element={<Realtor />} />
          <Route path="/FinancialPlanner" element={<FinancialPlanner />} />
          <Route path="/DivorceAttorney" element={<DivorceAttorney />} />
          <Route path="/Tools" element={<Tools />} />
          <Route path="/Location" element={<Location />} />
        </Routes>
        {educationOpen && (
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EducationPanel />
          </div>
        )}
      </div>

      {/* Modals */}
      <ScheduleCallModal
        isOpen={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
        onConfirm={(appointmentDetails) => {
          console.log("Appointment confirmed:", appointmentDetails);
        }}
      />

      {contactOpen && (
        <QuickContactModal onClose={() => setContactOpen(false)} />
      )}

         
      <Footer />
      <FooterText />
    </div>
  );
};

export default MortgageLandingPage;
