import { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay,  isAfter, isBefore, startOfDay } from "date-fns";
import { CheckCircle, X, ChevronLeft, ChevronRight, Clock, Phone } from "lucide-react";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const WEEKDAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const TIME_SLOTS = [
  "9:00 am", "9:30 am", "10:00 am", "10:30 am",
  "11:00 am", "1:00 pm", "1:30 pm", "2:00 pm",
];

const WHATSAPP_NUMBER = "12067958411";

const ScheduleCallModal = ({ isOpen, onClose, onConfirm }) => {
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  // Get ALL available days for the current month (future dates only)
  const getAvailableDaysForMonth = () => {
    const today = startOfDay(new Date());
    const monthStart = startOfMonth(viewDate);
    const monthEnd = endOfMonth(viewDate);
    
    const available = [];
    const currentDate = new Date(monthStart);
    
    while (currentDate <= monthEnd) {
      // Check if date is today or in the future
      if (isAfter(currentDate, today) || isSameDay(currentDate, today)) {
        available.push(currentDate.getDate());
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return available;
  };

  const availableDays = getAvailableDaysForMonth();

  const monthStart = startOfMonth(viewDate);
  const monthEnd = endOfMonth(viewDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startOffset = (monthStart.getDay() + 6) % 7;
  
  const totalDays = daysInMonth.length;
  const totalSlots = Math.ceil((startOffset + totalDays) / 7) * 7;
  const calendarDays = Array(totalSlots).fill(null);
  
  daysInMonth.forEach((day, index) => {
    calendarDays[startOffset + index] = day;
  });

  const rows = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    rows.push(calendarDays.slice(i, i + 7));
  }

  const changeMonth = (delta) => {
    setViewDate(delta > 0 ? addMonths(viewDate, 1) : subMonths(viewDate, 1));
    setSelectedDay(null);
    setSelectedTime(null);
  };

  const handleSelectDay = (day) => {
    if (!day) return;
    const today = startOfDay(new Date());
    
    // Check if date is in the past (before today)
    if (isBefore(day, today) && !isSameDay(day, today)) {
      alert("You cannot select a date in the past.");
      return;
    }
    
    const dayNumber = day.getDate();
    if (!availableDays.includes(dayNumber)) {
      alert("This date is not available. Please select another date.");
      return;
    }
    
    setSelectedDay(day);
    setSelectedTime(null);
  };

  const formatPhoneForWhatsApp = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('1')) {
      return cleaned;
    }
    return `1${cleaned}`;
  };

  const handleConfirm = () => {
    if (!selectedDay || !selectedTime) {
      alert("Please select both a date and time.");
      return;
    }

    if (!userName || !userEmail) {
      alert("Please provide your name and email.");
      return;
    }

    setIsSubmitting(true);

    const formattedDate = format(selectedDay, "MMMM d, yyyy");
    const appointmentDetails = {
      name: userName,
      email: userEmail,
      phone: userPhone || "Not provided",
      date: formattedDate,
      time: selectedTime,
      timezone: "Pakistan, Maldives Time (GMT+5)",
      consultant: "Adrian Webb",
      meeting_type: "Intro Call - Get to Know you!",
      duration: "15 min",
    };

    const message = `*New Appointment Scheduling!*%0A%0A` +
      `*Meeting Details:*%0A` +
      `📅 Date: ${appointmentDetails.date}%0A` +
      `⏰ Time: ${appointmentDetails.time}%0A` +
      `🌐 Timezone: ${appointmentDetails.timezone}%0A` +
      `⏱️ Duration: ${appointmentDetails.duration}%0A` +
      `📞 Meeting: ${appointmentDetails.meeting_type}%0A` +
      `👤 Consultant: ${appointmentDetails.consultant}%0A%0A` +
      `*Client Information:*%0A` +
      `👤 Name: ${appointmentDetails.name}%0A` +
      `📧 Email: ${appointmentDetails.email}%0A` +
      `📱 Phone: ${appointmentDetails.phone}%0A%0A` +
      `_Can you please confirm whether the appointment is scheduled ?_`;

    const phoneNumber = formatPhoneForWhatsApp(WHATSAPP_NUMBER);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    localStorage.setItem('lastAppointment', JSON.stringify(appointmentDetails));

    setShowConfirmation(true);
    
    if (onConfirm) {
      onConfirm(appointmentDetails);
    }

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      
      setTimeout(() => {
        onClose();
        setSelectedDay(null);
        setSelectedTime(null);
        setUserName("");
        setUserEmail("");
        setUserPhone("");
        setShowConfirmation(false);
      }, 2000);
    }, 1000);
  };

  if (!isOpen) return null;

  // Confirmation Screen
  if (showConfirmation) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
          <div className="flex flex-col items-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Appointment Scheduled!
            </h2>
            <p className="text-gray-600 mb-4">
              Your appointment has been confirmed. Opening WhatsApp to send details...
            </p>
            <div className="w-full bg-gray-50 p-4 rounded-lg text-left space-y-1">
              <p className="text-sm font-semibold">📅 {selectedDay && format(selectedDay, "MMMM d, yyyy")}</p>
              <p className="text-sm">⏰ {selectedTime}</p>
              <p className="text-sm">👤 {userName}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Panel - Consultant Info */}
        <div className="p-5 sm:p-8 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col">
          <button
            onClick={onClose}
            className="self-end text-gray-400 hover:text-gray-600 text-xl font-bold mb-2 md:hidden"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <img
            src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62b18/65d510dfb82945f90c2aa788_Adrian%20Webb%20WMS-p-1080.png"
            alt="Adrian Webb"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover object-top mb-2"
          />

          <p className="text-gray-500 font-semibold">Adrian Webb</p>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 mb-4">
            Intro Call - Get to Know you!
          </h2>

          <div className="flex items-center gap-2 text-gray-800 font-semibold mb-2">
            <Clock className="h-5 w-5" />
            <span>15 min</span>
          </div>
          <div className="flex items-center gap-2 text-gray-800 font-semibold mb-4">
            <Phone className="h-5 w-5" />
            <span>Phone call</span>
          </div>

          <p className="text-gray-800 text-sm sm:text-base">
            Let's get to know your situation and how we can help. We will go
            over the steps and what is required. Excited to be a part of this
            next chapter with you!
          </p>

          {/* Contact Information Inputs */}
          <div className="mt-6 space-y-3">
            <input
              type="text"
              placeholder="Your Name *"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              required
            />
            <input
              type="email"
              placeholder="Your Email *"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number (optional)"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
            <p className="text-xs text-gray-500 mt-1">
              * Required fields
            </p>
          </div>

          <div className="mt-auto pt-6 sm:pt-8 flex gap-6 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Cookie settings</a>
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </div>
        </div>

        {/* Right Panel - Calendar */}
        <div className="p-5 sm:p-8 relative">
          <button
            onClick={onClose}
            className="hidden md:block absolute top-6 right-6 text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
            Select a Date &amp; Time
          </h3>

          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => changeMonth(-1)}
              className="text-gray-500 hover:text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-bold text-gray-900 text-sm sm:text-base">
              {MONTH_NAMES[month]} {year}
            </span>
            <button
              onClick={() => changeMonth(1)}
              className="text-blue-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-50 transition"
              aria-label="Next month"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 text-center text-xs sm:text-sm text-gray-500 mb-2">
            {WEEKDAY_LABELS.map((w) => (
              <div key={w} className="font-medium">{w}</div>
            ))}
          </div>

          <div className="space-y-2 mb-6">
            {rows.map((row, ri) => (
              <div key={ri} className="grid grid-cols-7 text-center gap-y-2">
                {row.map((day, ci) => {
                  const today = startOfDay(new Date());
                  const isPastDate = day && isBefore(day, today) && !isSameDay(day, today);
                  const isAvailable = day && availableDays.includes(day.getDate()) && !isPastDate;
                  const isSelected = day && selectedDay && isSameDay(day, selectedDay);
                  
                  return (
                    <div key={ci} className="flex items-center justify-center">
                      {day ? (
                        <button
                          onClick={() => isAvailable && handleSelectDay(day)}
                          disabled={!isAvailable}
                          className={[
                            "w-7 h-7 sm:w-9 sm:h-9 rounded-full text-xs sm:text-sm font-medium transition flex items-center justify-center",
                            isSelected
                              ? "bg-blue-600 text-white"
                              : isAvailable
                              ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                              : "text-gray-300 cursor-not-allowed opacity-50",
                          ].join(" ")}
                          title={isPastDate ? "Past dates cannot be selected" : !isAvailable ? "Date not available" : ""}
                        >
                          {day.getDate()}
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
              <p className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                {format(selectedDay, "MMMM d, yyyy")}
              </p>
              <div className="grid grid-cols-2 gap-2 max-h-44 overflow-y-auto pr-1">
                {TIME_SLOTS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={[
                      "border rounded-lg py-2 text-xs sm:text-sm font-medium transition",
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
            <p className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Time zone</p>
            <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
              <span>🌐</span>
              <span>Pakistan, Maldives Time (GMT+5)</span>
            </div>
          </div>

          {selectedDay && selectedTime && (
            <button
              className="mt-6 w-full bg-[#25D366] text-white font-semibold py-3 rounded-xl hover:bg-[#1da851] transition flex items-center justify-center gap-2 text-sm sm:text-base"
              onClick={handleConfirm}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">⏳</span>
                  Processing...
                </span>
              ) : (
                <>
                  <span>📱</span>
                  Confirm via WhatsApp
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleCallModal;