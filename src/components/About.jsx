import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen text-gray-300 px-4 sm:px-8 py-12 md:py-24 bg-gradient-to-b from-[#f5f5f5] to-[#e3d5ca] relative overflow-hidden"
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
      {/* Animated Circle */}
      <motion.div
        className="absolute -bottom-16 -right-16 w-60 h-60 md:w-72 md:h-72 bg-[#f5f5f5] rounded-full opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          y: [0, -20, 0],
          x: [0, -15, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Title */}

        <motion.h2
          className="text-3xl sm:text-4xl text-black font-bold mb-8 sm:mb-12 tracking-wide border-b-4 border-[#6F5A4B] text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Skills & Experience Card */}
          <div className="relative group w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#6F5A4B] rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-[#6F5A4B] rounded-full"></div>

            <h3 className="text-2xl font-semibold text-[#6F5A4B]">
              Skills & Experience
            </h3>
            <p className="text-[#202216] mt-4 leading-relaxed text-lg">
              I&apos;m a <span className="font-bold">Full Stack Developer</span> with a strong focus on <span className="font-bold">frontend development</span> and growing expertise in backend technologies.
              I specialize in building responsive, user-friendly web applications using modern frameworks
              like <span className="font-bold">React</span>  and cross-platform mobile apps using <span className="font-bold">React Native</span>,  while also working with backend tools like <span className="font-bold">Node.js, Express, and databases (SQL/NoSQL).</span>
            </p>
            <p className="text-[#202216] mt-4 leading-relaxed text-lg">
              With a keen eye for UI/UX and a passion for clean, efficient code, I bridge the gap between design and functionality.
              I&apos;m continuously expanding my backend skills to become a well-rounded developer, ensuring seamless integration between client and server-side systems.</p>
          </div>

          {/* Tech Stack Card */}
          <div className="relative group w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#6F5A4B] rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-[#6F5A4B] rounded-full"></div>

            <h3 className="text-2xl font-semibold text-[#6F5A4B] mb-4">
              Tech Stack
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Frontend Column */}
              <div>
                <h4 className="font-bold text-[#6F5A4B]">Frontend</h4>
                <ul className="mt-2 space-y-1 text-[#202216]">
                  <li>• JavaScript (ES6+)</li>
                  <li>• TypeScript</li>
                  <li>• React.js</li>
                  <li>• Next.js</li>
                  <li>• React Native</li>

                  <li>• Tailwind CSS</li>
                  <li>• Redux/Zustand</li>
                </ul>
              </div>
              
              {/* Backend Column */}
              <div>
                <h4 className="font-bold text-[#6F5A4B]">Backend</h4>
                <ul className="mt-2 space-y-1 text-[#202216]">
                  <li>• Node.js</li>
                  <li>• Express.js</li>
                  <li>• MongoDB</li>
                  <li>• SQL</li>
                 
                  <li>• Firebase</li>
                </ul>
              </div>
              
              {/* Tools Row */}
              <div className="col-span-2 mt-2">
                <h4 className="font-bold text-[#6F5A4B]">Tools & More</h4>
                <ul className="mt-2 text-[#202216] flex flex-wrap gap-x-4 gap-y-1">
                  <li>• Git</li>
                
                  <li>• Vercel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-[#6F5A4B]">
            Hi, I&apos;m Muskan 👋
          </h3>
          <p className="text-[#202216] text-lg mt-4">
           
  Passionate about creating efficient, user-centric applications. 
  Open to collaborations, freelance opportunities, and tech discussions. 
  Let&apos;s connect and explore how we can work together.

          </p>
        </div>
      </div>
    </div>
  );
};

export default About;