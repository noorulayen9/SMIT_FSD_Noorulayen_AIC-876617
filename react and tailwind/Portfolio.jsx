import React from "react";

const projects = [
  {
    title: "Technology Website",
    category: "Technology",
    description:
      "A modern and responsive website designed for a technology business with a clean professional interface.",
    color: "from-[#211f1d] to-[#4a4540]",
  },
  {
    title: "E-Commerce Website",
    category: "E-Commerce",
    description:
      "A user-friendly online shopping website with a clean layout and responsive design.",
    color: "from-[#b22222] to-[#7f1818]",
  },
  {
    title: "Finance Website",
    category: "Finance",
    description:
      "A professional finance platform designed to present business information and financial services clearly.",
    color: "from-[#211f1d] to-[#6b625a]",
  },
  {
    title: "Healthcare Website",
    category: "Healthcare",
    description:
      "A clean and accessible healthcare website designed for patients and healthcare professionals.",
    color: "from-[#8f2d2d] to-[#b22222]",
  },
  {
    title: "Education Website",
    category: "Education",
    description:
      "A modern education platform designed to provide courses, learning resources, and information.",
    color: "from-[#211f1d] to-[#80756b]",
  },
  {
    title: "Business Dashboard",
    category: "Business Software",
    description:
      "A professional dashboard interface designed to help businesses manage information and operations.",
    color: "from-[#b22222] to-[#211f1d]",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-[#faf8f5] px-6 py-20 text-[#211f1d]"
    >
      {/* Heading */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#b22222]">
          Portfolio
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">
          Our Recent Work
        </h1>

        <p className="mt-5 leading-7 text-[#211f1d]/70">
          Explore examples of professional digital solutions created for
          different industries and business needs.
        </p>
      </div>

      {/* Projects */}
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-2xl border border-[#D4CBC0] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Project Image */}
            <div
              className={`flex h-52 items-center justify-center bg-gradient-to-br ${project.color}`}
            >
              <span className="px-5 text-center text-2xl font-bold text-white">
                {project.title}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="text-sm font-bold uppercase tracking-wide text-[#b22222]">
                {project.category}
              </span>

              <h2 className="mt-2 text-2xl font-bold">
                {project.title}
              </h2>

              <p className="mt-3 leading-7 text-[#211f1d]/65">
                {project.description}
              </p>

              <button className="mt-5 font-bold text-[#b22222] transition hover:text-[#7f1818]">
                View Project →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
