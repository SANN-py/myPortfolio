const skills = [
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Laravel",
  "HTML",
  "CSS",
  "JavaScript",
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12">
      {/* Profile Image */}
      <div className="mb-8 md:mb-0 flex shrink-0">
        <img
          src="/public/assets/profile.png"
          alt="Kim Mao"
          className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-blue-500"
        />
      </div>

      {/* About Text */}
      <div className="max-w-xl">
        <section id="about" className="py-20 bg-white">
          <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        </section>

        <p className="text-gray-600 mb-4 text-xl">
          Hi! I'm KimSann Mao, a passionate web developer who enjoys building
          modern, responsive web applications using React, Tailwind CSS, and
          Node.js. I love turning ideas into functional and visually appealing
          websites.
        </p>

        <p className="text-gray-600 mb-6 text-xl">
          I am currently seeking internship opportunities where I can further
          develop my skills and contribute to exciting, real-world projects. I
          am a third-year Computer Science student at Western University
          Cambodia and always eager to learn, collaborate, and create something
          amazing together.
        </p>

        {/* Highlighted Skills */}
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => {
            return (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold"
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
