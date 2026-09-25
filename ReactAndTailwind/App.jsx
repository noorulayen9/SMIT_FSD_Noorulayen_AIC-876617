import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./Home";
import About from "./About";
import Services from "./services";
import Contact from "./Contact";
import Pricing from "./Pricing";
import Portfolio from "./Portfolio";
import FAQ from "./FAQ";

import Login from "./Login";
import Register from "./Register";

function Website() {
  return (
    <>
      <Navbar />

      <main>
        {/* Home */}
        <section id="home">
          <Home />
        </section>

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Services */}
        <section id="services">
          <Services />
        </section>

        {/* Pricing */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* Portfolio */}
        <section id="portfolio">
          <Portfolio />
        </section>

        {/* FAQ */}
        <section id="faq">
          <FAQ />
        </section>

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Routes>
        {/* Complete Main Website */}
        <Route path="/" element={<Website />} />

        {/* Separate Authentication Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;



