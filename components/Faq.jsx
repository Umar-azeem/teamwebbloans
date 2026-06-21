import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do I need to save for a 20% down payment?",
    answer:
      "Not always. Many loan programs allow lower down payments depending on eligibility.",
  },
  {
    question: "Are Pre-Qualification and Pre-Approval the same thing?",
    answer:
      "No. Pre-approval is usually more detailed and involves verification of your financial information.",
  },
  {
    question:
      "What's the difference between an adjustable and a fixed rate mortgage?",
    answer:
      "A fixed-rate mortgage keeps the same interest rate, while an adjustable-rate mortgage may change over time.",
  },
  {
    question: "What is Private Mortgage Insurance (PMI)?",
    answer:
      "PMI is insurance that protects the lender when the borrower makes a smaller down payment.",
  },
  {
    question:
      "Can I access my home equity before I finish paying off my loan?",
    answer:
      "Yes, through options like home equity loans or lines of credit, subject to lender approval.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-green-800 font-bold uppercase text-center tracking-widest">
          FAQ
        </p>

        <h2 className="text-4xl text-black font-bold text-center mt-3 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-8 "
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center gap-4 text-left"
              >
                {openIndex === index ? (
                  <Minus className="text-green-700 w-7 h-7 " />
                ) : (
                  <Plus className="text-green-700 w-7 h-7" />
                )}

                <span className="text-xl font-bold text-green-800 mb-4">
                  {faq.question}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-4 ml-11 text-gray-600">
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