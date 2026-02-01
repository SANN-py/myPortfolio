const HeroSection = () => (
  <div>
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center 
               bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 
               animate-gradient text-white relative overflow-hidden"
      id="home"
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm KimSann</h1>
      <p className="text-xl mb-6">
        I build modern web applications with React & Tailwind CSS.
      </p>
      <div className="flex space-x-4">
        <a href="#projects">
          <button className="cursor-pointer px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            View Projects
          </button>
        </a>
        <a href="#contact">
          <button className="cursor-pointer px-6 py-3 border border-blue-600 rounded hover:bg-blue-100 hover:text-black">
            Contact Me
          </button>
        </a>
      </div>
    </section>
  </div>
);
export default HeroSection;
