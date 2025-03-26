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
    <div className="w-full min-h-screen bg-gradient-to-b from-[#f5f5f5] to-[#e3d5ca] text-gray-800 py-8 md:py-16 relative overflow-hidden">
      {/* Animated background element */}
      <motion.div
        className="absolute -bottom-16 -right-16 w-60 h-60 md:w-72 md:h-72 bg-[#f5f5f5] rounded-full opacity-30"
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.3, 0.6, 0.3], 
          y: [0, -20, 0], 
          x: [0, -15, 0] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 tracking-wide border-b-4 border-[#6F5A4B] text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Work
        </motion.h2>

        {/* Large screen: Infinite Scrolling */}
        <div className="hidden lg:block relative w-full overflow-hidden py-4">
          <motion.div
            className="flex gap-8 lg:gap-12"
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
                className="bg-white rounded-3xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 w-72 lg:w-80 h-[480px] lg:h-[500px] flex-shrink-0 flex flex-col justify-between mx-2"
                whileHover={{ scale: 1.02 }}
              >
                {/* Image */}
                <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-4 lg:mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Title and Description */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm lg:text-base mb-4 px-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex justify-center flex-wrap gap-2 lg:gap-4 mb-4">
                  {project.techStack.map((icon, i) => (
                    <img
                      key={i}
                      src={icon}
                      alt="tech icon"
                      className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
                    />
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-400 transition text-sm lg:text-base"
                  >
                    <FiExternalLink /> Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-800 hover:text-gray-600 transition text-sm lg:text-base"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Medium Screens: 2 columns */}
        <div className="hidden md:block lg:hidden gap-6 md:gap-8 grid-cols-2 w-full">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl lg:rounded-3xl shadow-lg p-4 lg:p-6 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <div className="w-full h-32 lg:h-40 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl lg:rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-2 lg:p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 lg:gap-3 mb-4">
                  {project.techStack.map((icon, i) => (
                    <img
                      key={i}
                      src={icon}
                      alt="tech icon"
                      className="w-8 h-8 object-contain"
                    />
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-400 transition text-sm"
                  >
                    <FiExternalLink /> Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-800 hover:text-gray-600 transition text-sm"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Screens: 1 column */}
        <div className="md:hidden grid gap-6 w-full">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 flex flex-col"
              whileHover={{ scale: 1.01 }}
            >
              {/* Image */}
              <div className="w-full h-40 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-2">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-xs mb-3">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((icon, i) => (
                    <img
                      key={i}
                      src={icon}
                      alt="tech icon"
                      className="w-6 h-6 object-contain"
                    />
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-400 transition text-xs"
                  >
                    <FiExternalLink /> Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-800 hover:text-gray-600 transition text-xs"
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