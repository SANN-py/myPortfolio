import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/NavBar";

import SkillsSection from "../scene/SkillSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

const Home = () => {
  const navs = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <>
      <Navbar navs={navs} />
      <HeroSection className="pt-16" />
      <AboutSection className="pt-16" />
      <SkillsSection className="pt-16" />
      <ContactSection className="pt-16" />
      <Footer navs={navs} />
    </>
  );
};

export default Home;
