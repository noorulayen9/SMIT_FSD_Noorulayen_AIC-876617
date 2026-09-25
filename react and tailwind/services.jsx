import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      number: "01",
      title: "Web Design",
      text: "Modern, responsive and user-focused website designs."
    },
    {
      number: "02",
      title: "Web Development",
      text: "High-performance websites and web applications."
    },
    {
      number: "03",
      title: "UI / UX Design",
      text: "Simple and intuitive interfaces designed around users."
    },
    {
      number: "04",
      title: "Brand Identity",
      text: "Visual identities that communicate your business clearly."
    },
    {
      number: "05",
      title: "Digital Strategy",
      text: "Practical strategies to improve your digital presence."
    },
    {
      number: "06",
      title: "Maintenance",
      text: "Continuous improvements, updates and technical support."
    }
  ];

  return (
    <div>

      <section className="bg-[#D4CBC0] px-6 py-24 text-center">
        <p className="font-semibold uppercase tracking-[0.25em] text-[#B22222]">
          Our Services
        </p>

        <h1 className="mt-4 text-5xl font-black md:text-6xl">
          Solutions built for growth.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700">
          From the first idea to the final product, we provide the
          digital services your business needs.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-2xl border border-[#D4CBC0] bg-white p-8 hover:bg-[#B22222] hover:text-white"
            >

              <span className="text-sm font-bold text-[#B22222] group-hover:text-[#D4CBC0]">
                {service.number}
              </span>

              <h2 className="mt-8 text-2xl font-bold">
                {service.title}
              </h2>

              <p className="mt-4 leading-7 text-gray-600 group-hover:text-white/80">
                {service.text}
              </p>

            </div>
          ))}

        </div>

        <div className="mt-16 rounded-3xl bg-[#211f1d] px-8 py-12 text-center text-white">
          <h2 className="text-3xl font-bold">
            Have a project in mind?
          </h2>

          <Link
            to="/contact"
            className="mt-6 inline-block rounded-full bg-[#B22222] px-7 py-3 font-semibold hover:bg-[#8f1b1b]"
          >
            Let's Talk
          </Link>
        </div>

      </section>

    </div>
  );
}

export default Services;
