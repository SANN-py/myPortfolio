const Card = ({ title, description, image, link }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <a
          target="_blank"
          href={link}
          className="text-blue-600 hover:underline"
        >
          View Project
        </a>
      )}
    </div>
  </div>
);
export default Card;
