import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#D4CBC0]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">

          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-[#B22222]">
              Welcome to SYNPOLISH
            </p>

            <h1 className="text-5xl font-black leading-tight text-[#211f1d] md:text-7xl">
              We create
              <span className="text-[#B22222]"> digital </span>
              experiences.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#211f1d]/70">
              SYNPOLISH helps businesses build beautiful websites,
              powerful digital products and memorable brand experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="rounded-full bg-[#B22222] px-7 py-3.5 font-semibold text-white hover:bg-[#8f1b1b]"
              >
                Explore Services
              </Link>

              <Link
                to="/contact"
                className="rounded-full border-2 border-[#B22222] px-7 py-3.5 font-semibold text-[#B22222] hover:bg-[#B22222] hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-[#211f1d] p-4 shadow-2xl">
            <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-[#D4CBC0]/20 bg-gradient-to-br from-[#B22222] to-[#211f1d]">

              <div className="text-center text-white">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#D4CBC0] text-4xl font-black text-[#B22222]">
                  S
                </div>

                <h2 className="text-4xl font-bold">
                  SYNPOLISH
                </h2>

                <p className="mt-3 text-[#D4CBC0]">
                  Design. Technology. Growth.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#B22222]">
            What We Do
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Everything your business needs
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {[
            {
              title: "Web Design",
              text: "Clean, modern and responsive websites built around your brand.",
              image: "https://www.designer-daily.com/wp-content/uploads/2019/11/web-design-computer.jpg",
            },
            {
              title: "Development",
              text: "Fast and scalable web applications using modern technologies.",
              image: "https://img.magnific.com/free-photo/operation-process-performance-development-icon_53876-16541.jpg?w=360",
            },
            {
              title: "Brand Strategy",
              text: "Strong visual identities that make your business memorable.",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQogxjpsFXzGOBCEcRFEOA1LrBXE9nl2_fJHYtM1zY55NdUNexNKL6EEFbT&s=10",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#D4CBC0] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="mb-6 h-20 w-20 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}

export default Home;
