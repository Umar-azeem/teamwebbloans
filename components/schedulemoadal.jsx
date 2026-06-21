import React, { useState } from "react";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];


const WEEKDAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


const AVAILABLE_DAYS = [23, 24, 25, 26, 27, 30];

const TIME_SLOTS = [
  "9:00 am", "9:30 am", "10:00 am", "10:30 am",
  "11:00 am", "1:00 pm", "1:30 pm", "2:00 pm",
];

const ScheduleCallModal = ({ onClose }) => {
  const [viewDate, setViewDate] = useState(new Date(2026, 5, 1)); // June 2026
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();


  const firstOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const startOffset = (firstOfMonth.getDay() + 6) % 7;

  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const rows = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  const changeMonth = (delta) => {
    setViewDate(new Date(year, month + delta, 1));
    setSelectedDay(null);
    setSelectedTime(null);
  };

  const handleSelectDay = (day) => {
    if (!day) return;
    setSelectedDay(day);
    setSelectedTime(null);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left panel */}
        <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col">
          <button
            onClick={onClose}
            className="self-end text-gray-400 hover:text-gray-600 text-xl font-bold mb-2 md:hidden"
            aria-label="Close"
          >
            ×
          </button>

          <img
            src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d510dfb82945f90c2aa788_Adrian%20Webb%20WMS-p-1080.png"
            alt="Adrian Webb"
            className="w-16 h-16 rounded-full object-cover object-top mb-2"
          />

          <p className="text-gray-500 font-semibold">Adrian Webb</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-1 mb-4">
            Intro Call - Get to Know you!
          </h2>

          <div className="flex items-center gap-2 text-gray-800 font-semibold mb-2">
            <img src="https://api.iconify.design/ic:baseline-access-time.svg?color=%23000000"></img>
            <span>15 min</span>
          </div>
          <div className="flex items-center gap-2 text-gray-800 font-semibold mb-4">
            <img src="https://api.iconify.design/line-md:phone.svg?color=%23000000"></img>
            <span>Phone call</span>
          </div>

          <p className="text-gray-800 ">
            Let's get to know your situation and how we can help. We will go
            over the steps and what is required. Excited to be a part of this
            next chapter with you!
          </p>

          <div className="mt-auto pt-8 flex gap-6 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Cookie settings</a>
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </div>
        </div>


        <div className="p-8 relative">
          <button
            onClick={onClose}
            className="hidden md:block absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none"
            aria-label="Close"
          >
            ×
          </button>

          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Select a Date &amp; Time
          </h3>

          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => changeMonth(-1)}
              className="text-gray-500 hover:text-gray-800 text-xl px-2"
              aria-label="Previous month"
            >
              ‹
            </button>
            <span className="font-bold text-gray-900">
              {MONTH_NAMES[month]} {year}
            </span>
            <button
              onClick={() => changeMonth(1)}
              className="text-blue-600 hover:text-blue-800 text-xl px-2"
              aria-label="Next month"
            >
              ›
            </button>
          </div>


          <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-2">
            {WEEKDAY_LABELS.map((w) => (
              <div key={w}>{w}</div>
            ))}
          </div>

          
          <div className="space-y-2 mb-6">
            {rows.map((row, ri) => (
              <div key={ri} className="grid grid-cols-7 text-center gap-y-2">
                {row.map((day, ci) => {
                  const isAvailable = day && AVAILABLE_DAYS.includes(day);
                  const isSelected = day && selectedDay === day;
                  return (
                    <div key={ci} className="flex items-center justify-center">
                      {day ? (
                        <button
                          onClick={() => isAvailable && handleSelectDay(day)}
                          disabled={!isAvailable}
                          className={[
                            "w-9 h-9 rounded-full text-sm font-medium transition flex items-center justify-center",
                            isSelected
                              ? "bg-blue-600 text-white"
                              : isAvailable
                              ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                              : "text-gray-300 cursor-default",
                          ].join(" ")}
                        >
                          {day}
                        </button>
                      ) : (
                        <span />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

        
          {selectedDay && (
            <div className="mb-6">
              <p className="font-semibold text-gray-900 mb-3">
                {MONTH_NAMES[month]} {selectedDay}, {year}
              </p>
              <div className="grid grid-cols-2 gap-2 max-h-44 overflow-y-auto pr-1">
                {TIME_SLOTS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={[
                      "border rounded-lg py-2 text-sm font-medium transition",
                      selectedTime === t
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-blue-200 text-blue-700 hover:bg-blue-50",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          
          <div>
            <p className="font-semibold text-gray-900 mb-2">Time zone</p>
            <div className="flex items-center gap-2 text-gray-700">
              <span aria-hidden="true">🌐</span>
              <span>Pakistan, Maldives Time (GMT+5)</span>
            </div>
          </div>

          {selectedDay && selectedTime && (
            <button
              className="mt-6 w-full bg-[#0a5c3a] text-white font-semibold py-3 rounded-xl hover:bg-[#08482d] transition"
              onClick={onClose}
            >
              Confirm {MONTH_NAMES[month]} {selectedDay} at {selectedTime}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleCallModal;