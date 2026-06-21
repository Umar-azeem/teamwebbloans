import { useState, useEffect } from "react";

export default function MortgageCalculator() {
  const [price, setPrice] = useState(300000);
  const [down, setDown] = useState(30000);
  const [rate, setRate] = useState(5.7);
  const [term, setTerm] = useState(30);
  const [hoa, setHoa] = useState(0);
  const [isVeteran, setIsVeteran] = useState(false);

  const [result, setResult] = useState({
    pi: 0,
    tax: 0,
    insurance: 0,
    hoa: 0,
    pmi: 0,
    total: 0,
  });

  const calculateMortgage = (principal, annualRate, years) => {
    if (!principal || !years) return 0;

    const months = years * 12;

    // Handle 0% interest rate
    if (annualRate === 0) {
      return principal / months;
    }

    const monthlyRate = annualRate / 100 / 12;

    return (
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    );
  };

  useEffect(() => {
    const loan = Math.max(price - down, 0);

    const pi = calculateMortgage(loan, rate, term);
    const tax = (price * 0.006) / 12; //
    const insurance = (price * 0.003) / 12; //

    let pmi = 0;

    if (price > 0 && !isVeteran && down / price < 0.2) {
      pmi = (loan * 0.005) / 12; // 0.5% annually
    }

    const total = pi + tax + insurance + hoa + pmi;

    setResult({
      pi,
      tax,
      insurance,
      hoa,
      pmi,
      total,
    });
  }, [price, down, rate, term, hoa, isVeteran]);

  return (
    <div className="bg-white py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="max-w-lg">
            <h1 className="text-green-600 font-bold uppercase tracking-wide text-lg">
              Mortgage Calculator
            </h1>

            <h2 className="text-2xl sm:text-3xl font-bold text-black mt-3">
              Estimate Your Monthly Mortgage Payment
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-600 leading-relaxed">
              Take the guesswork out of home search by finding out what your
              estimated monthly payment on your mortgage could be.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Form Card */}
          <div className="w-full lg:w-2/3 bg-white shadow-md rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-8">
              Enter your loan details below and we'll calculate your estimated
              monthly payment.
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Home Price ($)
                  </label>

                  <input
                    type="number"
                    min="0"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded-lg p-3 text-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Down Payment ($)
                  </label>

                  <input
                    type="number"
                    min="0"
                    value={down}
                    onChange={(e) => setDown(Number(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded-lg p-3 text-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Interest Rate (%)
                  </label>

                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded-lg p-3 text-black"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Loan Term
                  </label>

                  <select
                    value={term}
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg p-3 text-black"
                  >
                    <option value={15}>15 Years</option>
                    <option value={30}>30 Years</option>
                  </select>
                </div>

                <div className="pt-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isVeteran}
                      onChange={(e) => setIsVeteran(e.target.checked)}
                      className="h-5 w-5"
                    />

                    <span className="ml-3 text-black font-medium">
                      Military Veteran
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mt-8">
              Improve the accuracy of your monthly payment estimated by
              contacting a loan expert.
            </p>

            <button
              className="bg-green-800 text-white rounded-md p-3 font-semibold mt-6 w-full transform transition duration-300 hover:-translate-y-1"
            >
              Calculate
            </button>
          </div>

          {/* Result Card */}
          <div className="w-full lg:w-1/3 bg-black text-white rounded-xl p-6 sm:p-8">
            <p className="text-white text-md text-center">
              Your estimated monthly payment
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-center">
              ${result.total.toFixed(2)}
            </h2>

            <h3 className="text-xl font-bold mt-8 text-center">Breakdown</h3>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400 font-medium">
                  Principal & Interest
                </span>
                <span className="font-bold">${result.pi.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400 font-medium">PMI</span>
                <span className="font-bold">${result.pmi.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400 font-medium">
                  Property Taxes
                </span>
                <span className="font-bold">${result.tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400 font-medium">Insurance</span>
                <span className="font-bold">${result.insurance.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400 font-medium">HOA</span>
                <span className="font-bold">${result.hoa.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full mt-8 bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Quick Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}