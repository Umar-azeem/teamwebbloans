import { useState } from 'react';

const VideoCards = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const events = [
    {
      id: 1,
      title: 'An Evening With The Top ',
      venue: 'Rouge Room, Red Rock Casino & Resort',
      date: 'Thursday, May 21, 2026',
      videoId: '5pbX7pqzRGY',
      thumbnail: '/img/and1.webp',
    },
    {
      id: 2,
      title: '2026 Kickoff: Toast to the',
      venue: "Franklie's Uptown",
      date: 'Thursday, March 12, 2026',
      videoId: '8wcez21wFV4',
      thumbnail: '/img/and2.avif',
    },
    {
      id: 3,
      title: 'Fall Celebration at SkyVu',
      venue: 'SkyVu by Christopher Homes',
      date: 'Tuesday, October 28, 2025',
      videoId: '2h61IgCHgtA',
      thumbnail: '/img/and3.avif',
    },
    {
      id: 4,
      title: 'END OF SUMMER SOIRÉE',
      venue: 'Rouge Room, Red Rock Casino & Resort',
      date: 'Thursday, August 28, 2025',
      videoId: 'vQ2eeY4dYBI',
      thumbnail: '/img/and4.avif',
    },
    {
      id: 5,
      title: 'Summer Kickoff Event',
      venue: 'Tuscan Cove Bar + Patio',
      date: 'Thursday, June 5, 2025',
      videoId: 'u-jU9yIkqNA',
      thumbnail: '/img/and5.avif',
    },
    {
      id: 6,
      title: 'Toast To The Top 500 Celeb',
      venue: "Franklie's Uptown",
      date: 'Tuesday, March 4, 2025',
      videoId: 'erJZHum84uI',
      thumbnail: '/img/and6.avif',
    },
  ];

  const toggleVideo = (id) => {
    if (activeVideo === id) {
      setActiveVideo(null);
    } else {
      setActiveVideo(id);
    }
  };

  // Fallback thumbnail if maxresdefault doesn't exist
  const getThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <div className="bg-[#006132] rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
        Past Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Video Thumbnail / Player */}
            <div className="relative bg-black/10" style={{ paddingBottom: '56.25%' }}>
              {activeVideo === event.id ? (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${event.videoId}?autoplay=1&rel=0`}
                  title={event.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <>
                  {/* Thumbnail Image */}
                  <img
                    src={event.thumbnail || getThumbnail(event.videoId)}
                    alt={event.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to hqdefault if maxresdefault fails
                      e.target.src = `https://img.youtube.com/vi/${event.videoId}/hqdefault.jpg`;
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#006132]/30 to-[#006132]/50 flex items-center justify-center">
                    <button
                      onClick={() => toggleVideo(event.id)}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#006132] text-white flex items-center justify-center hover:bg-[#004d26] transition transform hover:scale-105 shadow-lg group"
                      aria-label="Play video"
                    >
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 ml-1 group-hover:scale-110 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Play button overlay text */}
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                    View Video
                  </div>
                </>
              )}
            </div>

            {/* Event Details */}
            <div className="p-4 sm:p-5">
              <h3 className="text-base sm:text-lg font-bold text-[#006132] mb-2 line-clamp-2">
                {event.title}
              </h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#006132]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm">{event.venue}</span>
                </p>
                <p className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#006132]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm">{event.date}</span>
                </p>
              </div>

              {/* View Video Button */}
              {activeVideo !== event.id && (
                <button
                  onClick={() => toggleVideo(event.id)}
                  className="mt-4 w-full bg-[#006132] text-white text-sm font-medium py-2.5 rounded-lg hover:bg-[#004d26] transition flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Video
                </button>
              )}

              {activeVideo === event.id && (
                <button
                  onClick={() => setActiveVideo(null)}
                  className="mt-4 w-full bg-gray-200 text-gray-700 text-sm font-medium py-2.5 rounded-lg hover:bg-gray-300 transition flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Close Video
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCards;