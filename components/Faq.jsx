"use client"
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do I need to save for a 20% down payment?",
    answer:
     "No! With FHA loans, you could get approved for options as little as 3.5% down, VA and USDA loans can offer you $0-down options, and with Private Mortgage Insurance (PMI) you can get into your new home with less than a 20% down payment. Whatever your situation, talk to your mortgage lender to discuss options."
  },
  {
    question: "Are Pre-Qualification and Pre-Approval the same thing?",
    answer:
      "No. Pre-qualification and pre-approval are two different things. Pre-qualification means that a mortgage lender has reviewed your financial records and believes you will qualify for a loan. A pre-approval is a conditional commitment from a lender that they will lend you the money for a mortgage.",
  },
  {
    question:
      "What's the difference between an adjustable and a fixed rate mortgage?",
    answer:
      "A fixed rate mortgage means that the interest rate is set when you take out the loan and will not change. With an adjustable rate mortgage, the interest rate may go up or down after a certain amount of time. Many adjustable rate mortgages will start at a lower interest rate than fixed rate mortgages.",
  },
  {
    question: "What is Private Mortgage Insurance (PMI)?",
    answer:
      "Private Mortgage Insurance (PMI) is a type of insurance you may be required to pay if you are taking out a conventional mortgage with a downpayment that is less than 20% of the home's overall value. If you refinance your home with a conventional loan and your equity is less than 20% of the home's value, you may also be required to pay PMI. Private Mortgage Insurance protects the lender in the event that you stop making payments on your loan.",
  },
  {
    question:
      "Can I access my home equity before I finish paying off my loan?",
    answer:
      "Yes! Your mortgage lender can work with a certified specialist to help you find the right refinance and reverse mortgage options to help you access your home equity before you've finished paying off your loan. This can help with covering the cost of remodels, college tuition, long-term care plans, and more! Talk to your mortgage lender to find out how you can access your home equity to cover any of your life's needs.*",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-green-800 font-bold uppercase text-center tracking-widest text-sm sm:text-base">
          FAQ
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold text-center mt-3 mb-8 sm:mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-6 sm:pb-8">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start sm:items-center gap-3 sm:gap-4 text-left"
              >
                {openIndex === index ? (
                  <Minus className="text-green-700 w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0 mt-1 sm:mt-0" />
                ) : (
                  <Plus className="text-green-700 w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0 mt-1 sm:mt-0" />
                )}

                <span className="text-base sm:text-xl font-bold text-green-800">
                  {faq.question}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-3 sm:mt-4 ml-8 sm:ml-11 text-sm sm:text-base text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}