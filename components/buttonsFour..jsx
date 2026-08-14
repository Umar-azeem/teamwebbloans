"use client";
import { MapPin, Wrench, Combine, MonitorPlay } from 'lucide-react';
import { Link } from 'react-router-dom';

const ButtonsFour = () => {
  const socialLinks = [
    {
      id: 'location',
      Icon: MapPin,
      bgColor: 'hover:bg-[#006132]',
      iconColor: 'text-[#006132]',
      hoverIconColor: 'group-hover:text-white',
      url: '/Location', // Match the route path exactly
      label: 'Location',
      className: 'mt-6 ml-5'
    },
    {
      id: 'tools',
      Icon: Wrench,
      bgColor: 'hover:bg-[#006132]',
      iconColor: 'text-[#006132]',
      hoverIconColor: 'group-hover:text-white',
      url: '/Tools', // Match the route path exactly
      label: 'Tools',
      className: 'mt-6 -ml-3'
    },
    {
      id: 'events',
      Icon: Combine,
      bgColor: 'hover:bg-[#006132]',
      iconColor: 'text-[#006132]',
      hoverIconColor: 'group-hover:text-white',
      url: '/Events', // Match the route path exactly
      label: 'Events',
      className: '-mt-2 ml-5'
    },
    {
      id: 'monitor',
      Icon: MonitorPlay,
      bgColor: 'hover:bg-[#006132]',
      iconColor: 'text-[#006132]',
      hoverIconColor: 'group-hover:text-white',
      url: '/MonitorPlays', // Match the route path exactly
      label: 'MonitorPlays',
      className: '-mt-3 -ml-5'
    }
  ];

  const renderIcon = (link) => {
    const IconComponent = link.Icon;
    return (
      <IconComponent 
        className={`w-8 h-8 ${link.iconColor} ${link.hoverIconColor} transition-colors duration-200 ${link.className}`}
      />
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Link
          to={socialLinks[0].url}
          className={`group relative w-[90px] h-[90px] bg-white rounded-[90px_5px_5px_5px] shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center ${socialLinks[0].bgColor}`}
        >
          {renderIcon(socialLinks[0])}
        </Link>

        <Link
          to={socialLinks[1].url}
          className={`group relative w-[90px] h-[90px] bg-white rounded-[5px_90px_5px_5px] shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center ${socialLinks[1].bgColor}`}
        >
          {renderIcon(socialLinks[1])}
        </Link>
      </div>

      <div className="flex gap-2">
        <Link
          to={socialLinks[2].url}
          className={`group relative w-[90px] h-[90px] bg-white rounded-[5px_5px_5px_90px] shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center ${socialLinks[2].bgColor}`}
        >
          {renderIcon(socialLinks[2])}
        </Link>

        <Link
          to={socialLinks[3].url}
          className={`group relative w-[90px] h-[90px] bg-white rounded-[5px_5px_90px_5px] shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center ${socialLinks[3].bgColor}`}
        >
          {renderIcon(socialLinks[3])}
        </Link>
      </div>
    </div>
  );
};

export default ButtonsFour;