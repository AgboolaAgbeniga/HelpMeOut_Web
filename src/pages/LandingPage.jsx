import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../components/navbar/Navbar.jsx"
import Header from "../components/LandingPage/Header.jsx"
import Line from "../components/LandingPage/Line.jsx"
import Features from "../components/LandingPage/Features"
import Works from "../components/LandingPage/Works.jsx"
import Footer from "../components/footer/Footer.jsx"


const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <section>
      <Navbar />
      <Header />
      <Line />
      <Features />
      <Line />
      <Works />
      <Footer />

    </section>
  )
}

export default LandingPage