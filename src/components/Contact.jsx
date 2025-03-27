import { motion } from "framer-motion";


const Contact = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center text-gray-300 px-4 sm:px-8 py-12 md:py-24 bg-gradient-to-b from-[#f5f5f5] to-[#e3d5ca] relative overflow-hidden">
      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 bg-[#f5f5f5]  rounded-full opacity-30"
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
      <div className="w-full max-w-[1000px] bg-opacity-40  rounded-2xl shadow-lg p-10 sm:p-16">
        <motion.h2 
                className="text-3xl sm:text-4xl max-w-7xl text-black font-bold mb-8 sm:mb-12 tracking-wide border-b-4 border-[#6F5A4B] text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Contact Me
              </motion.h2>

        <p className="text-center text-lg text-blue-600 mb-8 cursor-pointer hover:underline">
          learncodewith2004@gmail.com
        </p>

        <p className="text-center text-gray-500 mb-10">
          Feel free to contact me with any inquiries or questions!
        </p>

        {/* Form */}
        <form
          method="POST"
          action="https://getform.io/f/bdrywqeb"
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              className="flex-1 p-4 border-b-2 border-blue-500 focus:outline-none bg-transparent text-gray-800"
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              className="flex-1 p-4 border-b-2 border-blue-500 focus:outline-none bg-transparent text-gray-800"
            />
          </div>

          <textarea
            rows="4"
            placeholder="Message"
            name="message"
            required
            className="p-4 border-b-2 border-blue-500 focus:outline-none bg-transparent text-gray-800"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-500 font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        
      </div>
    </div>
  );
};

export default Contact;
