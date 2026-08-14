"use client";
import { MapPin, Wrench, Combine, MonitorPlay } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ButtonsFour = () => {
  const [activeId, setActiveId] = useState(null);

  const socialLinks = [
    {
      id: 'location',
      Icon: MapPin,
      bgColor: 'hover:bg-[#006132] active:bg-[#006132]',
      iconColor: 'text-[#006132]',
      hoverIconColor: 'group-hover:text-white group-active:text-white',
      url: '/Location',
      label: 'Location',
      className: 'mt-6 ml-5'
    },
    {
      id: 'tools',
      Icon: Wrench,
      bgColor: 'hover:bg-[#006132] active:bg-[#006132]',
      iconColor: 'text-[#006132]',
      hoverIconColor: 'group-hover:text-white group-active:text-white',
      url: '/Tools',
      label: 'Tools',
      className: 'mt-6 -ml-3'
    },
    {
      id: 'events',
      Icon: Combine,
      bgColor: 'hover:bg-[#006132] active:bg-[#006132]',
      iconColor: 'text-[#006132]',
      hoverIconColor: 'group-hover:text-white group-active:text-white',
      url: '/Events',
      label: 'Events',
      className: '-mt-2 ml-5'
    },
    {
      id: 'monitor',
      Icon: MonitorPlay,
      bgColor: 'hover:bg-[#006132] active:bg-[#006132]',
      iconColor: 'text-[#006132]',
      hoverIconColor: 'group-hover:text-white group-active:text-white',
      url: '/MonitorPlays',
      label: 'MonitorPlays',
      className: '-mt-3 -ml-5'
    }
  ];

  const handleClick = (id) => {
    setActiveId(id);
    // Reset after animation
    setTimeout(() => setActiveId(null), 300);
  };

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
          onClick={() => handleClick(socialLinks[0].id)}
          className={`group relative w-[90px] h-[90px] bg-white rounded-[90px_5px_5px_5px] shadow-md hover:scale-110 active:scale-110 transition-transform duration-200 flex items-center justify-center ${
            socialLinks[0].bgColor
          } ${
            activeId === socialLinks[0].id ? 'bg-[#006132]' : ''
          }`}
        >
          <span className={`${activeId === socialLinks[0].id ? 'text-white' : ''}`}>
            {renderIcon(socialLinks[0])}
          </span>
        </Link>

        <Link
          to={socialLinks[1].url}
          onClick={() => handleClick(socialLinks[1].id)}
          className={`group relative w-[90px] h-[90px] bg-white rounded-[5px_90px_5px_5px] shadow-md hover:scale-110 active:scale-110 transition-transform duration-200 flex items-center justify-center ${
            socialLinks[1].bgColor
          } ${
            activeId === socialLinks[1].id ? 'bg-[#006132]' : ''
          }`}
        >
          <span className={`${activeId === socialLinks[1].id ? 'text-white' : ''}`}>
            {renderIcon(socialLinks[1])}
          </span>
        </Link>
      </div>

      <div className="flex gap-2">
        <Link
          to={socialLinks[2].url}
          onClick={() => handleClick(socialLinks[2].id)}
          className={`group relative w-[90px] h-[90px] bg-white rounded-[5px_5px_5px_90px] shadow-md hover:scale-110 active:scale-110 transition-transform duration-200 flex items-center justify-center ${
            socialLinks[2].bgColor
          } ${
            activeId === socialLinks[2].id ? 'bg-[#006132]' : ''
          }`}
        >
          <span className={`${activeId === socialLinks[2].id ? 'text-white' : ''}`}>
            {renderIcon(socialLinks[2])}
          </span>
        </Link>

        <Link
          to={socialLinks[3].url}
          onClick={() => handleClick(socialLinks[3].id)}
          className={`group relative w-[90px] h-[90px] bg-white rounded-[5px_5px_90px_5px] shadow-md hover:scale-110 active:scale-110 transition-transform duration-200 flex items-center justify-center ${
            socialLinks[3].bgColor
          } ${
            activeId === socialLinks[3].id ? 'bg-[#006132]' : ''
          }`}
        >
          <span className={`${activeId === socialLinks[3].id ? 'text-white' : ''}`}>
            {renderIcon(socialLinks[3])}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ButtonsFour;