import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden relative"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Animated Circle */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#f5f5f5] rounded-full opacity-30"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3], y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="mx-auto flex flex-col justify-center items-end h-full text-right p-4 sm:p-8">
        <p className="text-[#202216] text-lg sm:text-xl md:text-2xl mr-2 sm:mr-4">
          Hi, my name is
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white">
          Muskan
        </h1>

        <h2 className="text-[10vw] sm:text-[7vw] md:text-7xl font-bold text-[#202216] leading-tight">
          I&apos;m a Full Stack Developer
        </h2>

        <div>
          <button
            className="mt-8 group border-2 border-[#202216] px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-end hover:bg-[#202216] hover:text-white text-sm sm:text-base transition-all duration-300"
            type="submit"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <FaArrowRight className="ml-2 sm:ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
