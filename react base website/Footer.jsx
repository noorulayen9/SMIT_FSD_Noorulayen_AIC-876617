function Footer() {
  return (
    <footer className="mt-20 bg-[#211f1d] text-[#D4CBC0]">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">

        <div>
          <h2 className="text-2xl font-black tracking-[0.15em] text-white">
            SYNPOLISH
          </h2>

          <p className="mt-4 max-w-sm leading-7 text-[#D4CBC0]/80">
            Modern digital solutions designed to help businesses grow,
            connect and create better experiences.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Quick Links</h3>

          <div className="mt-4 flex flex-col gap-2">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/about" className="hover:text-white">About</a>
            <a href="/services" className="hover:text-white">Services</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">Contact</h3>

          <p className="mt-4">hello@synpolish.com</p>
          <p className="mt-2">+92 301-------</p>
          <p className="mt-2">Faisalabad, Pakistan</p>
        </div>

      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm">
        © 2026 SYNPOLISH. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
