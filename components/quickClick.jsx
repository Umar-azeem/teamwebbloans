import React, { useState } from "react";

const steps = [
  {
    question: "What Is Your Full Name?",
    fields: [
      { name: "firstName", placeholder: "First Name", type: "text" },
      { name: "lastName", placeholder: "Last Name", type: "text" },
    ],
  },
  {
    question: "What Is Your Email Address?",
    fields: [
      { name: "email", placeholder: "Email Address", type: "email" },
    ],
  },
  {
    question: "What Is Your Phone Number?",
    fields: [
      { name: "phone", placeholder: "Phone Number", type: "tel" },
    ],
  },
  {
    question: "How Can We Help You?",
    fields: [
      { name: "message", placeholder: "Your message...", type: "textarea" },
    ],
  },
];

const QuickContactModal = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", message: "",
  });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const current = steps[step];
  const isLast = step === steps.length - 1;

  const handleNext = () => {
    if (isLast) { onClose(); return; }
    setStep((s) => s + 1);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#0a5c3a] rounded-3xl overflow-hidden flex flex-col min-h-[520px]"
        onClick={(e) => e.stopPropagation()}
      >
    
        <div className="absolute right-0 top-0 h-full flex items-center pointer-events-none select-none">
          <svg
            className="opacity-10 h-full"
            viewBox="0 0 400 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 420V80L200 280L360 80V420"
              stroke="white"
              strokeWidth="55"
              strokeLinejoin="round"
            />
            <rect x="100" y="400" width="200" height="18" rx="6" fill="white" />
          </svg>
        </div>

        
        <div className="absolute bottom-16 right-6 pointer-events-none select-none text-right hidden sm:block">
          <p className="text-white/10 text-5xl font-black tracking-tight leading-none">ADRIAN W</p>
          <p className="text-white/10 text-xl font-bold mt-1">Mortgage Advisors</p>
        </div>


        <div className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-5 border-b border-white/10">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-white font-semibold hover:opacity-75 transition text-sm sm:text-base"
          >
            <span className="text-xl font-bold">✕</span>
            <span>Close</span>
          </button>
          <span className="text-white font-bold text-sm sm:text-base">
            Question {step + 1}
          </span>
          <div className="flex items-center gap-2 text-white text-sm sm:text-base font-semibold">
            <span>🌐</span>
            <span>English</span>
          </div>
        </div>

    
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 sm:px-16 py-10 text-center gap-8">

          
          <div className="flex flex-col items-center gap-1">
            <img
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d6f053f3aaee0cbfc8fac7_new-logo.png"
              alt="Adrian Webb"
              className="w-16 h-10 object-contain"
            />
            <p className="text-white font-black text-sm tracking-widest">ADRIAN WEBB</p>
            <p className="text-white/60 text-xs">Mortgage Advisors</p>
          </div>

    
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white max-w-xl leading-tight">
            {current.question}
          </h2>

    
          <div className="flex flex-col gap-4 w-full max-w-2xl">
            {current.fields.map((field) =>
              field.type === "textarea" ? (
                <textarea
                  key={field.name}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handle}
                  placeholder={field.placeholder}
                  rows={4}
                  className="w-full bg-transparent border border-white/40 text-white placeholder-white/50 rounded-2xl px-6 py-4 text-base outline-none focus:border-white transition resize-none"
                />
              ) : (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  value={form[field.name]}
                  onChange={handle}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent border border-white/40 text-white placeholder-white/50 rounded-full px-6 py-4 text-base outline-none focus:border-white transition"
                />
              )
            )}
          </div>

          
          <button
            onClick={handleNext}
            className="bg-white text-[#0a5c3a] font-bold px-20 py-4 rounded-2xl text-base hover:bg-gray-100 transition"
          >
            {isLast ? "Submit" : "Next"}
          </button>

          
          {step > 0 && (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="text-white/50 text-sm hover:text-white transition -mt-4"
            >
              ← Back
            </button>
          )}
        </div>

    
        <div className="relative z-10 h-1 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-500"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>

        
        <div className="relative z-10 px-6 sm:px-16 py-4 text-center">
          <p className="text-white/40 text-[11px] sm:text-xs leading-5 max-w-2xl mx-auto">
            By submitting your phone number to Adrian Webb Mortgage Advisors, you authorize a
            representative of our company to send you text messages and notifications. Message
            frequency may vary. Message/data rates may apply. Reply STOP to unsubscribe, or HELP
            for assistance. We do not share data with third parties for marketing/promotional purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickContactModal;