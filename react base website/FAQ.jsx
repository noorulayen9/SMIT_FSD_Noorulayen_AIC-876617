import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide modern digital solutions including website development, UI/UX design, software solutions, e-commerce development, and business technology services.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the size and complexity of the project. A standard business website can usually be completed within a few weeks.",
  },
  {
    question: "Can you build a custom website?",
    answer:
      "Yes. We can create custom websites according to your business requirements, branding, features, and target audience.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We can provide ongoing maintenance, updates, bug fixes, security improvements, and technical support.",
  },
  {
    question: "Are your websites mobile responsive?",
    answer:
      "Yes. Our websites are designed to work smoothly across desktops, tablets, and mobile devices.",
  },
  {
    question: "Can I request changes during development?",
    answer:
      "Yes. Project requirements and revisions can be discussed during the development process.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can use the Contact section on the website to send your requirements or contact information. Our team can then review your request.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="min-h-screen bg-[#faf8f5] px-6 py-20 text-[#211f1d]"
    >
      {/* Heading */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#b22222]">
          Help Center
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">
          Frequently Asked Questions
        </h1>

        <p className="mt-5 leading-7 text-[#211f1d]/70">
          Find answers to some of the most common questions about our
          services and digital solutions.
        </p>
      </div>

      {/* FAQ */}
      <div className="mx-auto max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="overflow-hidden rounded-2xl border border-[#D4CBC0] bg-white shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between gap-5 p-6 text-left"
            >
              <span className="text-lg font-semibold">
                {faq.question}
              </span>

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#b22222] font-bold text-white">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="border-t border-[#D4CBC0] px-6 pb-6 pt-5 leading-7 text-[#211f1d]/65">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
