function Contact() {
  return (
    <div>

      <section className="bg-[#D4CBC0] px-6 py-24 text-center">
        <p className="font-semibold uppercase tracking-[0.25em] text-[#B22222]">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-black md:text-6xl">
          Let's work together.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700">
          Tell us about your project and our team will get back to you.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">

        <div>
          <h2 className="text-4xl font-black">
            Get in touch
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Whether you have a new project, a question or simply want
            to say hello, we'd love to hear from you.
          </p>

          <div className="mt-10 space-y-6">

            <div>
              <p className="font-bold text-[#B22222]">Email</p>
              <p className="mt-1">hello@synpolish.com</p>
            </div>

            <div>
              <p className="font-bold text-[#B22222]">Phone</p>
              <p className="mt-1">+92 301-------</p>
            </div>

            <div>
              <p className="font-bold text-[#B22222]">Location</p>
              <p className="mt-1">Faisalabad, Pakistan</p>
            </div>

          </div>
        </div>

        <form className="rounded-3xl bg-white p-8 shadow-xl">

          <div className="grid gap-5">

            <input
              type="text"
              placeholder="Your Name"
              required
              className="rounded-xl border border-[#D4CBC0] px-5 py-4 outline-none focus:border-[#B22222]"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="rounded-xl border border-[#D4CBC0] px-5 py-4 outline-none focus:border-[#B22222]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="rounded-xl border border-[#D4CBC0] px-5 py-4 outline-none focus:border-[#B22222]"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="resize-none rounded-xl border border-[#D4CBC0] px-5 py-4 outline-none focus:border-[#B22222]"
            ></textarea>

            <button
              type="submit"
              className="rounded-xl bg-[#B22222] py-4 font-bold text-white hover:bg-[#8f1b1b]"
            >
              Send Message
            </button>

          </div>

        </form>

      </section>

    </div>
  );
}

export default Contact;
