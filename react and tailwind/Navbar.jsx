function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D4CBC0] bg-[#faf8f5]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-black tracking-[0.15em] text-[#B22222]"
        >
          SYNPOLISH
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="font-semibold text-[#B22222] transition hover:text-[#8f1b1b]"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-[#211f1d] transition hover:text-[#B22222]"
          >
            About
          </a>

          <a
            href="#services"
            className="text-[#211f1d] transition hover:text-[#B22222]"
          >
            Services
          </a>

          <a
            href="#contact"
            className="text-[#211f1d] transition hover:text-[#B22222]"
          >
            Contact
          </a>

        </div>

        {/* Login / Register */}
        <div className="flex items-center gap-3">

          <a
            href="/login"
            className="hidden rounded-full px-5 py-2.5 font-medium text-[#B22222] transition hover:bg-[#D4CBC0] sm:block"
          >
            Login
          </a>

          <a
            href="/register"
            className="rounded-full bg-[#B22222] px-5 py-2.5 font-medium text-white transition hover:bg-[#8f1b1b]"
          >
            Register
          </a>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;
