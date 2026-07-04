import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
} from 'chart.js';
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2';
import { Calculator, Home, TrendingUp, DollarSign, PieChart, BarChart3, Activity, Clock, Users, FileText, MapPin, Search } from 'lucide-react';
import ScheduleCallModal from './scheduleCallModal';
import QuickContactModal from './quickClick';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);

// Move Icon component outside of the main component
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

// Sample property data for different cities
const propertyData = {
  'New York': { baseValue: 650000, growth: 0.08 },
  'Los Angeles': { baseValue: 580000, growth: 0.07 },
  'Chicago': { baseValue: 320000, growth: 0.05 },
  'Houston': { baseValue: 280000, growth: 0.06 },
  'Phoenix': { baseValue: 350000, growth: 0.09 },
  'Philadelphia': { baseValue: 270000, growth: 0.04 },
  'San Antonio': { baseValue: 250000, growth: 0.07 },
  'San Diego': { baseValue: 620000, growth: 0.08 },
  'Dallas': { baseValue: 310000, growth: 0.07 },
  'San Jose': { baseValue: 750000, growth: 0.06 },
};

// Generate stable market data (not random)
const generateStableMarketData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentYear = new Date().getFullYear();
  const baseValue = 350000;
  const monthlyGrowth = 0.003; // 0.3% monthly growth
  
  return months.map((month, index) => ({
    month: `${month} ${currentYear}`,
    value: Math.round(baseValue * Math.pow(1 + monthlyGrowth, index))
  }));
};

// Generate stable value history
const generateStableValueHistory = () => {
  const years = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
  const baseValue = 250000;
  const annualGrowth = 0.05;
  
  return years.map((year, index) => ({
    year,
    value: Math.round(baseValue * Math.pow(1 + annualGrowth, index))
  }));
};

const Tools = () => {
  // State for Mortgage Calculator
  const [contactOpen, setContactOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [loanAmount, setLoanAmount] = useState(250000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [downPayment, setDownPayment] = useState(50000);
  const [propertyTax, setPropertyTax] = useState(437);
  const [insurance, setInsurance] = useState(83);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // State for Home Value Estimator
  const [homeAddress, setHomeAddress] = useState('');
  const [estimatedValue, setEstimatedValue] = useState(null);
  const [valueHistory, setValueHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [locationError, setLocationError] = useState('');

  // State for Market Trends
  const [selectedTimeframe, setSelectedTimeframe] = useState('1Y');

  // Calculate Mortgage Payment using useMemo to avoid unnecessary re-renders
  const calculatedPayment = useMemo(() => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (principal > 0 && monthlyRate > 0) {
      const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      return payment + propertyTax + insurance;
    }
    return 0;
  }, [loanAmount, interestRate, loanTerm, downPayment, propertyTax, insurance]);

  // Update monthly payment when calculatedPayment changes
  useEffect(() => {
    setMonthlyPayment(calculatedPayment);
  }, [calculatedPayment]);

  // Generate stable market data
  const marketData = useMemo(() => generateStableMarketData(), []);

  // Chart Data Configurations
  const monthlyPaymentData = useMemo(() => ({
    labels: ['Principal & Interest', 'Property Taxes', 'Insurance', 'PMI', 'HOA Fees'],
    datasets: [
      {
        label: 'Monthly Payment Breakdown',
        data: [
          Math.max(0, monthlyPayment - propertyTax - insurance),
          propertyTax,
          insurance,
          0,
          0
        ],
        backgroundColor: ['#006132', '#008f45', '#00b85a', '#ffd700', '#ff6b6b'],
        borderWidth: 1,
      },
    ],
  }), [monthlyPayment, propertyTax, insurance]);

  const marketTrendData = useMemo(() => ({
    labels: marketData.map(d => d.month),
    datasets: [
      {
        label: 'Average Home Price',
        data: marketData.map(d => d.value),
        borderColor: '#006132',
        backgroundColor: 'rgba(0, 97, 50, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Market Trend',
        data: marketData.map(d => d.value * 1.05),
        borderColor: '#ffd700',
        backgroundColor: 'rgba(255, 215, 0, 0.05)',
        fill: false,
        tension: 0.4,
        borderDash: [5, 5],
      },
    ],
  }), [marketData]);

  const loanTypeDistribution = {
    labels: ['Fixed Rate', 'Adjustable Rate', 'FHA', 'VA', 'Jumbo'],
    datasets: [
      {
        data: [45, 15, 20, 12, 8],
        backgroundColor: ['#006132', '#008f45', '#00b85a', '#ffd700', '#ff6b6b'],
        borderWidth: 1,
      },
    ],
  };

  // Real location-based home value estimation
  const handleEstimateValue = useCallback(async () => {
    if (!homeAddress || homeAddress.trim().length < 3) {
      setLocationError('Please enter a valid address or city name');
      return;
    }

    setIsLoading(true);
    setLocationError('');
    setEstimatedValue(null);

    try {
      // Try to get coordinates from address using geocoding
      const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(homeAddress)}&format=json&limit=1`;
      const response = await fetch(geocodeUrl, {
        headers: {
          'User-Agent': 'MortgageTools/1.0'
        }
      });
      
      const data = await response.json();
      
      if (data && data.length > 0) {
        const location = data[0];
        const city = location.address?.city || location.address?.town || location.address?.village || 'Unknown';
        
        // Find matching city in our property data
        let baseValue = 320000;
        let growth = 0.05;
        
        // Check if city matches any in our database
        const matchedCity = Object.keys(propertyData).find(key => 
          city.toLowerCase().includes(key.toLowerCase()) || 
          key.toLowerCase().includes(city.toLowerCase())
        );
        
        if (matchedCity) {
          baseValue = propertyData[matchedCity].baseValue;
          growth = propertyData[matchedCity].growth;
        } else {
          // Use regional average based on state if available
          const state = location.address?.state || '';
          if (['CA', 'NY', 'MA', 'WA'].includes(state)) {
            baseValue = 500000;
          } else if (['TX', 'FL', 'AZ', 'NC'].includes(state)) {
            baseValue = 350000;
          } else if (['OH', 'PA', 'MI', 'IN'].includes(state)) {
            baseValue = 250000;
          }
        }

        // Add some variation based on location accuracy
        const randomFactor = 0.9 + (Math.random() * 0.2);
        const estimatedPrice = Math.round(baseValue * randomFactor);
        
        setEstimatedValue(estimatedPrice);
        
        // Generate value history based on estimated price
        const history = [];
        let val = estimatedPrice * 0.7;
        for (let i = 0; i < 8; i++) {
          const growthRate = 1 + (growth * (0.5 + Math.random() * 0.5));
          val = Math.round(val * growthRate);
          history.push(val);
        }
        setValueHistory(history);
        
        setLocationError(`Location found: ${city}, ${location.address?.state || ''}`);
      } else {
        // Fallback: Use zip code or city name to estimate
        const cityMatch = Object.keys(propertyData).find(key => 
          homeAddress.toLowerCase().includes(key.toLowerCase())
        );
        
        if (cityMatch) {
          const baseValue = propertyData[cityMatch].baseValue;
          const estimatedPrice = Math.round(baseValue * (0.9 + Math.random() * 0.2));
          setEstimatedValue(estimatedPrice);
          setLocationError('Location estimated based on city data');
        } else {
          // Default estimation
          const estimatedPrice = Math.round(300000 + Math.random() * 100000);
          setEstimatedValue(estimatedPrice);
          setLocationError('Location not found. Using regional average.');
        }
        
        // Generate value history
        const history = [];
        let val = estimatedValue || 300000;
        for (let i = 0; i < 8; i++) {
          val = Math.round(val * (0.95 + Math.random() * 0.1));
          history.push(val);
        }
        setValueHistory(history);
      }
    } catch (error) {
      console.error('Error estimating value:', error);
      setLocationError('Error fetching location data. Please try again.');
      // Fallback estimation
      const estimatedPrice = Math.round(300000 + Math.random() * 100000);
      setEstimatedValue(estimatedPrice);
    } finally {
      setIsLoading(false);
    }
  }, [homeAddress, estimatedValue]);

  // Get user's current location
  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const reverseGeocodeUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
            const response = await fetch(reverseGeocodeUrl, {
              headers: {
                'User-Agent': 'MortgageTools/1.0'
              }
            });
            const data = await response.json();
            if (data && data.address) {
              const city = data.address.city || data.address.town || data.address.village || '';
              const state = data.address.state || '';
              setHomeAddress(`${city}, ${state}`.trim());
            }
          } catch (error) {
            console.error('Error getting location:', error);
          }
        },
        (error) => {
          console.error('Geolocation error:', error);
          setLocationError('Unable to get your location. Please enter your address manually.');
        }
      );
    } else {
      setLocationError('Geolocation is not supported by your browser.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-7xl mx-auto">
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
          
          {contactOpen && (
            <QuickContactModal onClose={() => setContactOpen(false)} />
          )}
          
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

            <div className="relative w-full max-w-[450px]">
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
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />

              <div className="absolute bottom-4 flex flex-col justify-center sm:bottom-8 right-0 left-0 sm:left-auto mx-auto sm:mx-0 bg-white text-gray-900 p-5 sm:p-2 rounded-2xl shadow-2xl w-[70%] sm:w-64">
                <h3 className="text-lg font-bold mb-2">Adrian Webb</h3>
                <p className="text-gray-600 text-sm mb-1">Senior Mortgage Advisor</p>
                <p className="text-gray-500 text-xs mb-1">NMLS ID: 811655</p>
                <p className="text-gray-500 text-xs mb-4">NMLS CO ID: 1815656</p>

                <div className="flex items-center gap-2">
                  <a href="https://www.facebook.com/adrian.webb.127" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    <Icon src={icons.facebook} size={18} />
                  </a>
                  <a href="https://www.instagram.com/adrian.webb.127/" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    <Icon src={icons.instagram} size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/adrian-webb-492b2910/" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    <Icon src={icons.linkedin} size={18} />
                  </a>
                  <a href="https://www.youtube.com/channel/UCPdDvkQzRXzOt16uQ6J3sEA" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    <Icon src={icons.youtube} size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <div className="text-center mb-12 mt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mortgage & Real Estate Tools
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional tools to help you make informed decisions about your home financing journey.
            From mortgage calculations to market trends, we've got you covered.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Average Home Price</p>
                <p className="text-2xl font-bold text-gray-900">$362,450</p>
                <p className="text-sm text-green-600">↑ 4.2% this year</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <Home className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Average Interest Rate</p>
                <p className="text-2xl font-bold text-gray-900">6.5%</p>
                <p className="text-sm text-red-600">↑ 0.25% this month</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Listings</p>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
                <p className="text-sm text-green-600">↑ 8% from last month</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Days on Market</p>
                <p className="text-2xl font-bold text-gray-900">32</p>
                <p className="text-sm text-green-600">↓ 5 days from last month</p>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Mortgage Calculator */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-bold text-gray-900">Mortgage Calculator</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Home Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={loanAmount + downPayment}
                    onChange={(e) => {
                      const total = Number(e.target.value);
                      setLoanAmount(total - downPayment);
                    }}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Down Payment
                  </label>
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Term (Years)
                  </label>
                  <select
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value={15}>15 Years</option>
                    <option value={20}>20 Years</option>
                    <option value={30}>30 Years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Annual Property Tax
                  </label>
                  <input
                    type="number"
                    value={propertyTax}
                    onChange={(e) => setPropertyTax(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-600">Estimated Monthly Payment</p>
                <p className="text-3xl font-bold text-green-600">
                  ${monthlyPayment.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {/* Payment Breakdown Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <PieChart className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-bold text-gray-900">Payment Breakdown</h2>
            </div>
            <div className="h-64">
              <Pie data={monthlyPaymentData} options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom'
                  }
                }
              }} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-700 rounded-full"></span>
                <span>Principal & Interest: ${Math.max(0, monthlyPayment - propertyTax - insurance).toFixed(0)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span>Property Tax: ${propertyTax}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-300 rounded-full"></span>
                <span>Insurance: ${insurance}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Market Trends Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Activity className="h-6 w-6 text-green-600" />
                <h2 className="text-xl font-bold text-gray-900">Market Trends</h2>
              </div>
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-3 py-1 border text-black border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="3M">3 Months</option>
                <option value="6M">6 Months</option>
                <option value="1Y">1 Year</option>
                <option value="5Y">5 Years</option>
              </select>
            </div>
            <div className="h-64">
              <Line data={marketTrendData} options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom'
                  }
                },
                scales: {
                  y: {
                    beginAtZero: false,
                    ticks: {
                      callback: function(value) {
                        return '$' + value.toLocaleString();
                      }
                    }
                  }
                }
              }} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Home className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-bold text-gray-900">Home Value Estimator</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Address or City
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={homeAddress}
                    onChange={(e) => setHomeAddress(e.target.value)}
                    placeholder="Enter city, state, or full address"
                    className="flex-1 px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button
                    onClick={getCurrentLocation}
                    className="px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    title="Use current location"
                  >
                    <MapPin className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleEstimateValue}
                disabled={isLoading}
                className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Estimating...
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4" />
                    Estimate Home Value
                  </>
                )}
              </button>
              
              {locationError && (
                <div className={`text-sm ${locationError.includes('found') ? 'text-green-600' : 'text-yellow-600'} bg-yellow-50 p-2 rounded-lg`}>
                  {locationError}
                </div>
              )}
              
              {estimatedValue && (
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">Estimated Home Value</p>
                  <p className="text-2xl font-bold text-green-600">
                    ${estimatedValue.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    *This is an estimate based on public records and market data
                  </p>
                </div>
              )}
              
              {valueHistory.length > 0 && (
                <div className="h-40 mt-4">
                  <Bar data={{
                    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                    datasets: [{
                      label: 'Value History',
                      data: valueHistory,
                      backgroundColor: 'rgba(0, 97, 50, 0.6)',
                      borderColor: '#006132',
                      borderWidth: 2,
                    }]
                  }} options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: false,
                        ticks: {
                          callback: function(value) {
                            return '$' + (value / 1000).toFixed(0) + 'k';
                          }
                        }
                      }
                    }
                  }} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-bold text-gray-900">Loan Type Distribution</h2>
            </div>
            <div className="h-64">
              <Doughnut data={loanTypeDistribution} options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom'
                  }
                }
              }} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-700 rounded-full"></span>
                <span>Fixed Rate: 45%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span>Adjustable: 15%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-300 rounded-full"></span>
                <span>FHA: 20%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span>VA: 12%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-bold text-gray-900">Quick Resources</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                <h3 className="font-semibold text-gray-900">Down Payment Guide</h3>
                <p className="text-sm text-gray-600">Learn about down payment options and requirements</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                <h3 className="font-semibold text-gray-900">Pre-Approval Checklist</h3>
                <p className="text-sm text-gray-600">Everything you need for a smooth pre-approval</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                <h3 className="font-semibold text-gray-900">Closing Cost Estimator</h3>
                <p className="text-sm text-gray-600">Estimate your closing costs before you buy</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                <h3 className="font-semibold text-gray-900">First-Time Homebuyer Guide</h3>
                <p className="text-sm text-gray-600">Step-by-step guide for first-time buyers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-bold text-gray-900">Learn From Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Should I save 20% down?</h3>
              <p className="text-sm text-gray-600">While 20% down avoids PMI, there are many loan programs with lower down payment options...</p>
              <button className="mt-2 text-green-600 font-medium text-sm hover:text-green-700">Learn More →</button>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Fixed vs Adjustable Rate</h3>
              <p className="text-sm text-gray-600">Understand the difference between fixed-rate and adjustable-rate mortgages to choose the right option...</p>
              <button className="mt-2 text-green-600 font-medium text-sm hover:text-green-700">Learn More →</button>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">What is PMI?</h3>
              <p className="text-sm text-gray-600">Private Mortgage Insurance protects lenders when you put less than 20% down...</p>
              <button className="mt-2 text-green-600 font-medium text-sm hover:text-green-700">Learn More →</button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>* All estimates are for informational purposes only. Please consult with a licensed professional for accurate information.</p>
          <p className="mt-1">Data updated as of {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      
      <ScheduleCallModal
        isOpen={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
        onConfirm={(appointmentDetails) => {
          console.log("Appointment confirmed:", appointmentDetails);
        }}
      />
    </div>
  );
};

export default Tools;