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
    <div className="w-full min-h-screen bg-gradient-to-b from-[#f5f5f5] to-[#e3d5ca] text-gray-800 px-4 sm:px-8 py-12 md:py-24 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto p-8 flex flex-col items-center justify-center">
        
        {/* Title Section */}
        <motion.h2 
          className="text-4xl font-bold mb-12 tracking-wide border-b-4 border-[#6F5A4B] text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        {/* Skills Grid with Animation */}
        <motion.div 
          className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Delay between each skill animation
              }
            }
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group transition-all duration-300 hover:scale-110"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex justify-center items-center bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-lg sm:text-xl mt-4 font-medium group-hover:font-bold transition-all duration-300">
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
