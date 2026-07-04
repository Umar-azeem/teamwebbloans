// LocationFinder.jsx
import React, { useState, useCallback, useRef, useMemo } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, Autocomplete } from '@react-google-maps/api';
import '../src/LocationFinder.css';
import ScheduleCallModal from './scheduleCallModal';

// Google Maps API Key - Replace with your own
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

// Sample location data - Replace with your actual data from backend
const LOCATIONS_DATA = [
  {
    id: 1,
    name: 'Uptown Charlotte Financial Center',
    address: '101 S Tryon St, Charlotte, NC 28280',
    lat: 35.2271,
    lng: -80.8431,
    phone: '(704) 555-0100',
    hours: 'Mon-Fri: 9AM - 6PM',
    type: 'branch',
    services: ['Mortgage Consultation', 'Refinancing', 'Home Equity']
  },
  {
    id: 2,
    name: 'SouthPark Mortgage Office',
    address: '4321 Park Rd, Suite 200, Charlotte, NC 28210',
    lat: 35.1395,
    lng: -80.8531,
    phone: '(704) 555-0200',
    hours: 'Mon-Fri: 9AM - 5PM',
    type: 'branch',
    services: ['Mortgage Consultation', 'Pre-Approval', 'Loan Processing']
  },
  {
    id: 3,
    name: 'Ballantyne Financial Center',
    address: '14825 Ballantyne Village Way, Charlotte, NC 28277',
    lat: 35.0586,
    lng: -80.8583,
    phone: '(704) 555-0300',
    hours: 'Mon-Fri: 9AM - 5PM',
    type: 'branch',
    services: ['Mortgage Consultation', 'Refinancing']
  },
  {
    id: 4,
    name: 'ATM - Uptown Charlotte',
    address: '101 S Tryon St (Lobby), Charlotte, NC 28280',
    lat: 35.2274,
    lng: -80.8428,
    phone: 'N/A',
    hours: '24/7 Access',
    type: 'atm',
    services: ['Cash Withdrawals', 'Deposits']
  },
  {
    id: 5,
    name: 'ATM - South End',
    address: '1520 South Blvd, Charlotte, NC 28203',
    lat: 35.2113,
    lng: -80.8597,
    phone: 'N/A',
    hours: '24/7 Access',
    type: 'atm',
    services: ['Cash Withdrawals', 'Deposits']
  }
];

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '500px'
};

const defaultCenter = {
  lat: 35.2271,
  lng: -80.8431
};

const options = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: true,
  mapTypeControl: true,
  fullscreenControl: true,
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    }
  ]
};
 const Icon = ({ src, size = 20, className = "" }) => (
    <img src={src} width={size} height={size} className={className} alt="" />
  );
  const icons = {
    phone: "https://img.icons8.com/ios/50/ffffff/phone.png",
    chevronDown: "https://img.icons8.com/ios/50/ffffff/expand-arrow.png",
    calendar: "https://img.icons8.com/ios/50/0a5c3a/calendar.png",
    arrowRight: "https://img.icons8.com/ios/50/ffffff/forward--v1.png",
    facebook: "https://img.icons8.com/ios-filled/50/374151/facebook-new.png",
    instagram: "https://img.icons8.com/ios/50/374151/instagram-new.png",
    linkedin: "https://img.icons8.com/ios-filled/50/374151/linkedin.png",
    youtube: "https://img.icons8.com/ios-filled/50/374151/youtube-play.png",
  };
 const LocationFinder = () => {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [locations] = useState(LOCATIONS_DATA);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchRadius, setSearchRadius] = useState(25);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('branch');
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const autocompleteRef = useRef(null);

  // Calculate distance between two coordinates
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 3959; // Miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Use useMemo to compute filtered locations - no setState in effect!
  const filteredLocations = useMemo(() => {
    let filtered = [...locations];

    // Filter by tab (branch/atm)
    if (activeTab === 'branch') {
      filtered = filtered.filter(loc => loc.type === 'branch');
    } else if (activeTab === 'atm') {
      filtered = filtered.filter(loc => loc.type === 'atm');
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(loc => 
        loc.name.toLowerCase().includes(query) ||
        loc.address.toLowerCase().includes(query) ||
        loc.services.some(service => service.toLowerCase().includes(query))
      );
    }

    // If user location is set, calculate distances and sort
    if (userLocation) {
      filtered = filtered.map(loc => ({
        ...loc,
        distance: calculateDistance(userLocation.lat, userLocation.lng, loc.lat, loc.lng)
      }));
      
      filtered = filtered
        .filter(loc => loc.distance <= searchRadius)
        .sort((a, b) => a.distance - b.distance);
    }

    return filtered;
  }, [locations, activeTab, searchQuery, userLocation, searchRadius]);

  // Get user's current location
  const getUserLocation = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(pos);
          setMapCenter(pos);
          setIsLoading(false);
        },
        () => {
          alert('Unable to retrieve your location. Please enter a location manually.');
          setIsLoading(false);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
      setIsLoading(false);
    }
  };

  // Handle search by address
  const handlePlaceSelect = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        };
        setMapCenter(location);
        setUserLocation(location);
        setSearchQuery(place.formatted_address || place.name);
      }
    }
  };

  // Handle location click on map
  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
    setMapCenter({ lat: location.lat, lng: location.lng });
  };

  // Handle info window close
  const handleInfoClose = () => {
    setSelectedLocation(null);
  };

  // Schedule appointment
  const scheduleAppointment = (locationName) => {
    setScheduleOpen(true);
  };

  // Handle map load
  const handleMapLoad = (map) => {
    setMapLoaded(true);
    console.log('Map loaded successfully');
  };

  // Handle script load
  const handleScriptLoad = () => {
    setScriptLoaded(true);
    console.log('Google Maps script loaded');
  };

  // Handle script error
  const handleScriptError = (error) => {
    console.error('Google Maps script failed to load:', error);
    setScriptLoaded(false);
  };

  // Render location list items
  const renderLocationItem = (location) => {
    const isActive = selectedLocation?.id === location.id;
    return (
      <div 
        key={location.id} 
        className={`location-item ${isActive ? 'active' : ''}`}
        onClick={() => handleMarkerClick(location)}
      >
        <h4>{location.name}</h4>
        <div className="address">{location.address}</div>
        {location.distance && (
          <div className="distance">
            <i className="fas fa-route"></i> {location.distance.toFixed(1)} mi away
          </div>
        )}
        <div className="location-meta">
          <span className="tag">
            <i className="far fa-clock"></i> {location.hours}
          </span>
          {location.type === 'branch' && (
            <span className="tag branch-tag">
              <i className="fas fa-store"></i> Branch
            </span>
          )}
          {location.type === 'atm' && (
            <span className="tag atm-tag">
              <i className="fas fa-atm"></i> ATM
            </span>
          )}
        </div>
        <button 
          className="schedule-btn"
          onClick={(e) => {
            e.stopPropagation();
            scheduleAppointment(location.name);
          }}
        >
          <i className="fas fa-calendar-check"></i> Schedule appointment
        </button>
      </div>
    );
  };

  return (
    <LoadScript 
      googleMapsApiKey={GOOGLE_MAPS_API_KEY}
      libraries={['places']}
      onLoad={handleScriptLoad}
      onError={handleScriptError}
      loadingElement={<div className="map-loading"><i className="fas fa-spinner fa-spin"></i><p>Loading Google Maps...</p></div>}
    >
    <main className="relative z-10 bg-[#006132] rounded-2xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center px-0 sm:px-6 lg:px-8 pt-18 pb-20 gap-10">
        <div className="flex-1 max-w-2xl w-full text-center px-4 lg:text-left">
          <div className="hidden md:flex flex-col">
            <p className="text-md font-bold tracking-[0.2em] mb-6 uppercase">
              Hi, I'm Adrian Webb
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
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
              className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-white/30 px-6 py-4 rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1"
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
            <h2 className="text-2xl sm:text-3xl font-bold">100K+</h2>
          </div>

          <div className="relative w-full max-w-[450px] ">
            <div className="flex flex-col text-center p-6 md:hidden">
              <p className="text-md font-bold tracking-[0.2em] mb-6 uppercase">
                Hi, I'm Adrian Webb
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
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
                maskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />

            <div className="absolute bottom-4 flex flex-col justify-center sm:bottom-8 right-0 left-0 sm:left-auto mx-auto sm:mx-0 bg-white text-gray-900 p-5  sm:p-2 rounded-2xl shadow-2xl w-[70%] sm:w-64">
              <h3 className="text-lg font-bold mb-2">Adrian Webb</h3>
              <p className="text-gray-600 text-sm mb-1">
                Senior Mortgage Advisor
              </p>
              <p className="text-gray-500 text-xs mb-1">NMLS ID: 811655</p>
              <p className="text-gray-500 text-xs mb-4">NMLS CO ID: 1815656</p>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/adrian.webb.127"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Icon src={icons.facebook} size={18} />
                </a>
                <a
                  href="https://www.instagram.com/adrian.webb.127/"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Icon src={icons.instagram} size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/adrian-webb-492b2910/"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Icon src={icons.linkedin} size={18} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCPdDvkQzRXzOt16uQ6J3sEA"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Icon src={icons.youtube} size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="locator-container">
         
        <div className="page-header">
          <h1><i className="fas fa-map-pin"></i> Find a Location</h1>
          <p>Connect with Adrian Webb and the Team Webb Loans team at a financial center near you.</p>
        </div>

        {/* Search Card */}
        <div className="search-card">
          <div className="search-tabs">
            <button 
              className={`search-tab ${activeTab === 'branch' ? 'active' : ''}`}
              onClick={() => setActiveTab('branch')}
            >
              <i className="fas fa-store"></i> Branches
            </button>
            <button 
              className={`search-tab ${activeTab === 'atm' ? 'active' : ''}`}
              onClick={() => setActiveTab('atm')}
            >
              <i className="fas fa-atm"></i> ATMs
            </button>
          </div>

          <div className="search-grid">
            <div className="form-group">
              <label><i className="fas fa-search"></i> City, ZIP, or Address</label>
              <Autocomplete
                onLoad={(ref) => { autocompleteRef.current = ref; }}
                onPlaceChanged={handlePlaceSelect}
                options={{
                  types: ['geocode', 'establishment'],
                  componentRestrictions: { country: 'us' }
                }}
              >
                <input
                  type="text"
                  placeholder="e.g., Dallas, TX or 75201"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                    }
                  }}
                />
              </Autocomplete>
            </div>
            
            <div className="form-group">
              <label><i className="fas fa-arrows-alt-h"></i> Radius</label>
              <select 
                value={searchRadius} 
                onChange={(e) => {
                  const radius = parseInt(e.target.value);
                  setSearchRadius(radius);
                }}
              >
                <option value="10">10 miles</option>
                <option value="25">25 miles</option>
                <option value="50">50 miles</option>
                <option value="100">100 miles</option>
              </select>
            </div>
            
            <div className="search-actions">
              <button 
                className="btn-primary"
                onClick={() => {
                  if (userLocation) {
                    // Trigger re-filter by updating a state that useMemo depends on
                    setSearchRadius(searchRadius);
                  } else {
                    getUserLocation();
                  }
                }}
              >
                <i className="fas fa-search"></i> Search
              </button>
              <button 
                className="btn-outline"
                onClick={getUserLocation}
              >
                <i className="fas fa-location-dot"></i> Use my location
              </button>
            </div>
          </div>
        </div>

        {/* Results: List + Map */}
        <div className="results-wrapper">
          {/* Left List */}
          <div className="locations-list" id="locationList">
            <h3>
              <i className="fas fa-store-alt"></i> 
              {filteredLocations.length} {filteredLocations.length === 1 ? 'location' : 'locations'} found
            </h3>

            {isLoading ? (
              <div className="loading-spinner">
                <i className="fas fa-spinner fa-spin"></i> Finding your location...
              </div>
            ) : filteredLocations.length === 0 ? (
              <div className="no-results">
                <i className="fas fa-map-pin"></i>
                <h4>No locations found</h4>
                <p>Please try a different search area or adjust the radius.</p>
              </div>
            ) : (
              filteredLocations.map(renderLocationItem)
            )}
          </div>

          {/* Right Map */}
          <div className="map-container">
            {!scriptLoaded ? (
              <div className="map-loading">
                <i className="fas fa-spinner fa-spin"></i>
                <p>Loading Google Maps...</p>
              </div>
            ) : !mapLoaded ? (
              <div className="map-loading">
                <i className="fas fa-spinner fa-spin"></i>
                <p>Loading map...</p>
              </div>
            ) : (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={mapCenter}
                zoom={13}
                options={options}
                onLoad={handleMapLoad}
              >
                {filteredLocations.map((location) => (
                  <Marker
                    key={location.id}
                    position={{ lat: location.lat, lng: location.lng }}
                    onClick={() => handleMarkerClick(location)}
                    icon={{
                      url: location.type === 'atm' 
                        ? 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                        : 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
                      scaledSize: window.google && new window.google.maps.Size(32, 32)
                    }}
                  />
                ))}

                {userLocation && window.google && (
                  <Marker
                    position={userLocation}
                    icon={{
                      url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
                      scaledSize: new window.google.maps.Size(32, 32)
                    }}
                    label={{
                      text: 'You',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '10px'
                    }}
                  />
                )}

                {selectedLocation && window.google && (
                  <InfoWindow
                    position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
                    onCloseClick={handleInfoClose}
                  >
                    <div className="info-window">
                      <h4>{selectedLocation.name}</h4>
                      <p><i className="fas fa-map-pin"></i> {selectedLocation.address}</p>
                      {selectedLocation.phone !== 'N/A' && (
                        <p><i className="fas fa-phone"></i> {selectedLocation.phone}</p>
                      )}
                      <p><i className="far fa-clock"></i> {selectedLocation.hours}</p>
                      <div className="services">
                        <strong>Services:</strong>
                        <ul>
                          {selectedLocation.services.map((service, index) => (
                            <li key={index}>{service}</li>
                          ))}
                        </ul>
                      </div>
                      <button 
                        className="schedule-btn"
                        onClick={() => scheduleAppointment(selectedLocation.name)}
                      >
                        <i className="fas fa-calendar-check"></i> Schedule Appointment
                      </button>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            )}

            <div className="map-overlay-info">
              <i className="fas fa-circle" style={{ color: '#006132', fontSize: '0.6rem' }}></i> 
              {filteredLocations.length} {filteredLocations.length === 1 ? 'location' : 'locations'} in area
            </div>
          </div>
        </div>

        {/* Appointment Banner */}
        <div className="appointment-banner">
          <div>
            <h3><i className="fas fa-handshake"></i> Schedule an appointment</h3>
            <p>Adrian Webb and our specialists are ready to help at your convenience.</p>
          </div>
          <button
            onClick={() => setScheduleOpen(true)}
            className="btn-light"
          >
            <i className="fas fa-calendar-plus"></i> Schedule Intro Call
          </button>
        </div>
      </div>

      <ScheduleCallModal
        isOpen={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
        onConfirm={(appointmentDetails) => {
          console.log("Appointment confirmed:", appointmentDetails);
        }}
      />
    </LoadScript>
  );
};

export default LocationFinder;