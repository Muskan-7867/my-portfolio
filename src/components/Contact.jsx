import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-[#f5f5f5] to-[#e3d5ca] flex justify-center items-center p-4 sm:p-10 relative overflow-hidden"
    >
      {/* Animated Background Circles */}
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
        className="absolute -bottom-32 -right-32 w-72 h-72 bg-[#f5f5f5] rounded-full opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          y: [0, -20, 0],
          x: [0, -15, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Contact Form Container */}
      <div className="w-full max-w-[1100px] bg-white bg-opacity-20 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-12 md:p-16 lg:p-20 z-10 relative">
        
        {/* Title */}
        <motion.h2
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#202216] to-[#6F5A4B] mb-8 sm:mb-10 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>

        {/* Form */}
        <form
          method="POST"
          action="https://getform.io/f/bdrywqeb"
          className="flex flex-col gap-6"
        >
          <motion.input
            className="p-4 bg-white bg-opacity-70 text-[#202216] rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-[#6F5A4B] transition-all"
            type="text"
            placeholder="Your Name"
            name="name"
            required
            whileFocus={{ scale: 1.05 }}
          />

          <motion.input
            className="p-4 bg-white bg-opacity-70 text-[#202216] rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-[#6F5A4B] transition-all"
            type="email"
            placeholder="Your Email"
            name="email"
            required
            whileFocus={{ scale: 1.05 }}
          />

          <motion.textarea
            className="p-4 bg-white bg-opacity-70 text-[#202216] rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-[#6F5A4B] transition-all"
            rows="6"
            placeholder="Your Message"
            name="message"
            required
            whileFocus={{ scale: 1.05 }}
          />

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-4 px-6 bg-[#6F5A4B] text-white font-bold rounded-lg shadow-md hover:bg-[#5a463b] transition-all duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Let's Collaborate 🚀
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
