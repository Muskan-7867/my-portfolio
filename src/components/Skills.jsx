import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { src: "/images/skills/js.png", name: "JavaScript" },
    { src: "/images/skills/react.svg", name: "React.js" },
    { src: "/images/skills/node.png", name: "Node.js" },
    { src: "/images/skills/express.jpeg", name: "Express.js" },
    { src: "/images/skills/socket.png", name: "Socket.io" },
    { src: "/images/skills/native.png", name: "React Native" },
    { src: "/images/skills/ts.png", name: "TypeScript" },
    { src: "/images/skills/mongodb.png", name: "MongoDB" },
    { src: "/images/skills/sql.png", name: "SQL" },
    { src: "/images/skills/tailwind.png", name: "Tailwind CSS" },
    { src: "/images/skills/html.png", name: "HTML" },
    { src: "/images/skills/css.png", name: "CSS" },
  ];

  return (
    <div 
      id="skills"
      className="w-full min-h-screen bg-gradient-to-b from-[#f5f5f5] to-[#e3d5ca] text-gray-800 px-4 py-12 md:py-24 relative overflow-hidden"
    >
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
      {/* Animated Floating Circle */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Title Section */}
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 tracking-wide border-b-4 border-[#6F5A4B] text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        {/* Skills Grid with Animation */}
        <motion.div 
          className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group transition-all duration-300 hover:scale-105 p-2"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center bg-white shadow-md hover:shadow-lg rounded-xl transition-all duration-300">
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain p-1"
                  loading="lazy"
                />
              </div>
              <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-3 font-medium text-center group-hover:text-[#6F5A4B] transition-all duration-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;