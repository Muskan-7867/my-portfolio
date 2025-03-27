import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaRegStar, FaCodeBranch } from "react-icons/fa";

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
      stars: 24,
      forks: 12,
      featured: true
    },
    {
      id: 2,
      image: "/images/works/schedulrr.webp",
      title: "Schedulrr",
      description: "Task scheduling tool with calendar integration and reminders.",
      demoLink: "https://schdulrr.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Schdulrr.git",
      techStack: ["/images/skills/next.png", "/images/skills/js.png", "/images/skills/neon.jpg", "/images/skills/clerk.png"],
      stars: 18,
      forks: 5,
      featured: true
    },

    {
      id: 3,
      image: "/images/works/capgen.jpeg",
      title: "CaptionGen",
      description: "Transform your posts with smart, style-adaptive captions powered by Gemini AI.",
      demoLink: "https://caption-gen-i53s.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/CaptionGen.git",
      techStack: ["/images/skills/react.svg", "/images/skills/js.png", "/images/skills/tailwind.png"],
      stars: 32,
      forks: 15,
      featured:true,
    },
    {
      id: 4,
      image: "/images/works/netflix.jpg",
      title: "Netflix ",
      description: "Netflix clone with authentication, movie browsing, and playback.",
      demoLink: "https://netflix-clone-xi-ruddy.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Netflix-Clone.git",
      techStack: ["/images/skills/react.svg", "/images/skills/redux.png", "/images/skills/firebase.png"],
      stars: 32,
      forks: 15
    },
    {
      id: 4,
      image: "/images/works/yt.avif",
      title: "YouTube ",
      description: "YouTube clone with search, video playback, and related content.",
      demoLink: "https://my-youtube-8f5j.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/MY-youtube.git",
      techStack: ["/images/skills/react.svg", "/images/skills/tailwind.png", "/images/skills/js.png"],
      stars: 28,
      forks: 9
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#f5f5f5] to-[#e3d5ca] text-gray-800 py-8 md:py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 bg-[#e3d5ca] rounded-full opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          y: [0, 20, 0],
          x: [0, 15, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
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
        {/* Title with animated underline */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            My <span className="text-[#6F5A4B]">Projects</span>
          </h2>
          <motion.div 
            className="h-1 bg-[#6F5A4B] mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my featured projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="w-full mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-[#6F5A4B]">Featured Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((icon, i) => (
                      <div key={i} className="bg-gray-100 rounded-full p-2">
                        <img
                          src={icon}
                          alt="tech icon"
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <FaRegStar /> {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCodeBranch /> {project.forks}
                      </span>
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-400 transition text-sm font-medium"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-800 hover:text-gray-600 transition text-sm font-medium"
                      >
                        <FiGithub /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-8 text-[#6F5A4B]">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      {project.techStack.slice(0, 3).map((icon, i) => (
                        <img
                          key={i}
                          src={icon}
                          alt="tech icon"
                          className="w-5 h-5 object-contain"
                        />
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-xs text-gray-500">+{project.techStack.length - 3}</span>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-400 transition text-sm"
                        title="View Demo"
                      >
                        <FiExternalLink />
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-gray-600 transition text-sm"
                        title="View Code"
                      >
                        <FiGithub />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center bg-white p-8 rounded-2xl shadow-lg max-w-3xl w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
          <p className="text-gray-600 mb-6">
            Check out my GitHub profile for more projects and contributions.
          </p>
          <motion.a
            href="https://github.com/Muskan-7867"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#6F5A4B] text-white rounded-lg font-medium hover:bg-[#5a4a3d] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="mr-2" />
            Visit My GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;