import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden relative"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Animated Circle */}
      <motion.div
        className="absolute -bottom-20 -right-20 md:-bottom-32 md:-right-32 w-56 h-56 md:w-72 md:h-72 bg-[#f5f5f5] rounded-full opacity-30"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3], y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="flex justify-center items-center h-full relative z-10">
        <div className="text-left px-6 sm:px-12 lg:px-24 ml-32 md:ml-52 lg:ml-64">
          <p className="text-white text-opacity-80 text-lg sm:text-xl md:text-2xl mb-2">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-4">
            Muskan
          </h1>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black text-opacity-90 leading-tight mb-8">
            Full Stack Developer
          </h2>

          <button
            className="group border-2 border-white px-6 py-3 flex items-center justify-center hover:bg-white hover:text-[#202216] text-white transition-all duration-300"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <FaArrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;