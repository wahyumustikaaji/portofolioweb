import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from '../../Components/ui/Navbar';

export default function WorkDetails() {
  const { id } = useParams();
  const projectId = Number(id); // Pastikan ID berupa angka

  // Data contoh
  const project = {
    id: projectId,
    title: `Project ${projectId}`,
    description:
      "This is a detailed description of the project. It explains the goals, challenges, and solutions implemented during the development process.",
    image: "https://placehold.co/1200x600",
    category: "Web Development",
    client: "Client Name",
    date: "January 2023",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    images: [
      "https://placehold.co/800x600",
      "https://placehold.co/800x600",
      "https://placehold.co/800x600",
    ],
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <Link
          to="/projects"
          className="inline-flex items-center text-gray-600 hover:text-black mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl font-nohemi font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{project.description}</p>

          <div className="mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-2">Client</h3>
              <p>{project.client}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Date</h3>
              <p>{project.date}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Category</h3>
              <p>{project.category}</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
