function About() {
  return (
    <div>

      <section className="bg-[#D4CBC0] px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">

          <p className="font-semibold uppercase tracking-[0.25em] text-[#B22222]">
            About Us
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            We turn ideas into digital experiences.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#211f1d]/70">
            SYNPOLISH is a creative digital company focused on designing
            meaningful, modern and effective digital solutions.
          </p>

        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">

        <div>
          <h2 className="text-4xl font-black">
            Our Story
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            We believe technology should feel simple, beautiful and useful.
            Our team combines creativity and technology to help businesses
            establish a strong digital presence.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            From websites and applications to branding and digital strategy,
            SYNPOLISH works with businesses to create experiences people
            remember.
          </p>
        </div>

        <div className="rounded-3xl bg-[#211f1d] p-10 text-white">
          <h3 className="text-3xl font-bold">
            Our Mission
          </h3>

          <p className="mt-5 leading-8 text-[#D4CBC0]">
            To combine thoughtful design with modern technology and help
            ambitious businesses grow in the digital world.
          </p>
        </div>

      </section>

    </div>
  );
}

export default About;
