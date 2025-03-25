import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Work = () => {
  const projects = [
    {
      id: 1,
      image: "/images/works/chat.webp",
      title: "QuickTalk",
      description: "Real-time chat app with instant messaging, E2EE, and video chat.",
      demoLink: "https://quicktalk-nine.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/QuickTalk",
      techStack: ["/images/skills/react.svg", "/images/skills/node.png", "/images/skills/socket.png", "/images/skills/mongodb.png"],
    },
    {
      id: 2,
      image: "/images/works/schedulrr.webp",
      title: "Schedulrr",
      description: "Task scheduling tool with calendar integration and reminders.",
      demoLink: "https://schdulrr.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Schdulrr.git",
      techStack: ["/images/skills/next.png", "/images/skills/js.png", "/images/skills/neon.jpg", "/images/skills/clerk.png"],
    },
    {
      id: 3,
      image: "/images/works/netflix.jpg",
      title: "Netflix Clone",
      description: "Netflix clone with authentication, movie browsing, and playback.",
      demoLink: "https://netflix-clone-xi-ruddy.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Netflix-Clone.git",
      techStack: ["/images/skills/react.svg", "/images/skills/redux.png", "/images/skills/firebase.png"],
    },
    {
      id: 4,
      image: "/images/works/yt.avif",
      title: "YouTube Clone",
      description: "YouTube clone with search, video playback, and related content.",
      demoLink: "https://my-youtube-8f5j.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/MY-youtube.git",
      techStack: ["/images/skills/react.svg", "/images/skills/tailwind.png", "/images/skills/js.png"],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#f5f5f5] to-[#e3d5ca] text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Work
        </motion.h2>

        {/* Large screen: Infinite Scrolling */}
        <div className="hidden lg:block relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 60,
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {[...projects, ...projects].map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 w-80 h-[500px] flex-shrink-0 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="w-40 h-40 mx-auto mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex justify-center gap-4 mb-4">
                  {project.techStack.map((icon, i) => (
                    <img
                      key={i}
                      src={icon}
                      alt="tech icon"
                      className="w-10 h-10 object-contain"
                    />
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-400 transition"
                  >
                    <FiExternalLink /> Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-800 hover:text-gray-600 transition"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Small and Medium Screens: Grid Layout */}
        <div className="lg:hidden grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 flex flex-col"
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <div className="w-full h-40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex gap-3 mb-4">
                  {project.techStack.map((icon, i) => (
                    <img
                      key={i}
                      src={icon}
                      alt="tech icon"
                      className="w-10 h-10 object-contain"
                    />
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-400 transition"
                  >
                    <FiExternalLink /> Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-800 hover:text-gray-600 transition"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
