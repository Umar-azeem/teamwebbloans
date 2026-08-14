"use client";
import { Play, Calendar, MapPin, Wrench, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import ButtonsFour from './buttonsFour.';

const GuideSection = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.guide-card');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const guides = [
    { id: 'video', icon: Play, title: 'Video Tutorials', description: 'Watch mortgage guides covering basics, applications, and expert tips.' },
    { id: 'events', icon: Calendar, title: 'Events & Webinars', description: 'Join live events and webinars to learn from industry experts.' },
    { id: 'location', icon: MapPin, title: 'Find Us Locally', description: 'Visit our offices in Seattle, Las Vegas, and Arizona for personalized help.' },
    { id: 'tools', icon: Wrench, title: 'Mortgage Tools', description: 'Use calculators and estimators to make informed home loan decisions.' },
  ];

  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#006132]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-84 bg-white rounded-full blur-3xl transform translate-x-32 -translate-y-32 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-32 translate-y-32 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Left Side - Content */}
          <div className="w-full lg:w-[55%] space-y-4 sm:space-y-6 animate-fadeInUp">
            <div>
              
              <p className="text-sm sm:text-base text-white/80 max-w-xl animate-slideInLeft animation-delay-200">
                Explore our resources to help you navigate the mortgage journey with confidence
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {guides.map((guide, index) => {
                const Icon = guide.icon;
                return (
                  <div
                    key={guide.id}
                    id={guide.id}
                    className={`guide-card group flex items-start gap-3 sm:gap-4 p-1 sm:p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] hover:border-white/40 ${
                      isVisible[guide.id] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                      animation: isVisible[guide.id] ? 'slideInLeft 0.5s ease-out forwards' : 'none',
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="bg-white/20 p-2.5 sm:p-3 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-white mb-0.5">
                        {guide.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                        {guide.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              
            </div>
          </div>

          {/* Right Side - ButtonsFour */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end animate-slideInRight animation-delay-300">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <h3 className="text-white text-center text-sm sm:text-base font-semibold mb-3 sm:mb-4 opacity-80">
                Quick Links
              </h3>
              <ButtonsFour />
              <p className="text-white/60 text-xs text-center mt-3 sm:mt-4">
                Click to explore
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
          opacity: 0;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
          opacity: 0;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default GuideSection;