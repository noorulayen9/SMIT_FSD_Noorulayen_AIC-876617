import React from "react";

const plans = [
  {
    name: "Starter",
    price: "$299",
    description: "A simple and professional solution for small businesses.",
    features: [
      "Professional Website",
      "Up to 5 Pages",
      "Responsive Design",
      "Basic SEO",
      "Contact Form",
      "Email Support",
    ],
  },
  {
    name: "Professional",
    price: "$599",
    description: "A complete solution for growing businesses.",
    features: [
      "Professional Website",
      "Up to 10 Pages",
      "Responsive Design",
      "Advanced SEO",
      "Custom UI/UX",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$999",
    description: "Advanced digital solutions for larger businesses.",
    features: [
      "Custom Website",
      "Unlimited Pages",
      "Advanced UI/UX",
      "Advanced SEO",
      "Custom Features",
      "Dedicated Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="min-h-screen bg-[#faf8f5] px-6 py-20 text-[#211f1d]"
    >
      {/* Heading */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#b22222]">
          Pricing
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">
          Choose the Right Plan
        </h1>

        <p className="mt-5 leading-7 text-[#211f1d]/70">
          Flexible pricing plans designed to provide professional digital
          solutions for businesses of different sizes.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-8 transition duration-300 hover:-translate-y-2 ${
              plan.popular
                ? "border-[#b22222] bg-[#211f1d] text-white shadow-xl"
                : "border-[#D4CBC0] bg-white"
            }`}
          >
            {/* Popular */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#b22222] px-5 py-2 text-sm font-bold text-white">
                Most Popular
              </div>
            )}

            <h2 className="text-2xl font-bold">{plan.name}</h2>

            <p
              className={`mt-3 leading-6 ${
                plan.popular ? "text-white/70" : "text-[#211f1d]/65"
              }`}
            >
              {plan.description}
            </p>

            {/* Price */}
            <div className="my-8">
              <span className="text-5xl font-bold">{plan.price}</span>

              <span
                className={`ml-2 ${
                  plan.popular ? "text-white/60" : "text-[#211f1d]/60"
                }`}
              >
                / project
              </span>
            </div>

            {/* Features */}
            <ul className="space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="font-bold text-[#b22222]">✓</span>

                  <span
                    className={
                      plan.popular ? "text-white/80" : "text-[#211f1d]/75"
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`mt-8 w-full rounded-xl px-5 py-3 font-semibold transition ${
                plan.popular
                  ? "bg-[#b22222] text-white hover:bg-[#941c1c]"
                  : "bg-[#211f1d] text-white hover:bg-[#b22222]"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

