import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTelegram,
} from "react-icons/fa";

const ContactSection = () => {
  const icons = [
    { icon: <FaGithub />, link: "#", color: "hover:bg-gray-900" },
    {
      icon: <FaLinkedin />,
      link: "#",
      color: "hover:bg-blue-700",
    },

    {
      icon: <FaTelegram />,
      link: "https://t.me/Kimsan_mao",
      color: "hover:bg-blue-400",
      target: "_blank",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");
    e.target.reset();
  };

  const inputClass =
    "w-full bg-gray-50 border-0 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 transition-all outline-none";

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <section id="contact" className="py-20 bg-white">
          <h2 className="text-4xl font-bold text-center ">Contact Me</h2>
        </section>
        <div className="grid grid-cols-1 gap-16 items-stretch">
          {/* Left Side: Copy & Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
                I am ready to start my career. And
                <span className="text-blue-600"> learn something</span> new.
              </h2>
              <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                You can contact me anytime if you want to collaborate on a
                project or just want to say hi. I am always open to new
                opportunities and connections.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-700">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  <FaEnvelope size={20} />
                </div>
                <span className="font-medium text-lg">
                  mkimsann200@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-4 text-gray-700">
                <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                  <FaMapMarkerAlt size={20} />
                </div>
                <span className="font-medium text-lg">
                  Phnom Penh, Steung Men Chey
                </span>
              </div>
              <div className="flex items-center space-x-4 text-gray-700">
                <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                  <FaTelegram size={20} />
                </div>
                <span className="font-medium text-lg">0973078937</span>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
                Connect with me
              </p>
              <div className="flex space-x-4">
                {icons.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target={social.target}
                    className={`p-4 bg-gray-100 rounded-full text-xl text-gray-600 transition-all duration-300 hover:text-white ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
