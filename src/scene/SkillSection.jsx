import Card from "../components/Card";

const skills = [
  { name: "React", level: 20 },
  { name: "Tailwind CSS", level: 40 },
  { name: "Node.js", level: 50 },
  { name: "Express", level: 30 },
  { name: "PostgreSQL", level: 40 },
  { name: "Laravel", level: 50 },
];

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS",
    image: "/public/assets/imageCard1.png",
    link: "https://portfolio-rho-ivory-76.vercel.app/",
  },
  {
    title: "Todo App",
    description: "A simple todo app built with HTML, CSS, and JavaScript",
    image: "/public/assets/imageCard2.png",
    link: "https://sann-py.github.io/todo/",
  },
  {
    title: "Quiz App",
    description: "A basic app built with react js and tailwind css",
    image: "/public/assets/imageCard3.png",
    link: "https://quiz2-snowy.vercel.app/",
  },
];

const SkillsSection = () => (
  <section className="py-20 bg-gray-50" id="skills">
    <div className="container mx-auto px-4">
      <section id="projects" className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      </section>

      {/* Projects */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">What I’ve Built</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-16" id="skills">
        <h3 className="text-2xl font-semibold mb-6">Skills</h3>
        <div className="space-y-4 max-w-xl mx-auto">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
