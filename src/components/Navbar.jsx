import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Home, User, Code, Briefcase } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state based on window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 text-white bg-[#6F5A4B] rounded-lg focus:outline-none md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`w-64 h-full bg-[#202216] text-white fixed flex flex-col justify-between p-6 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-50`}
      >
        <div className="text-center border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold tracking-tight">Muskan </h1>
          <p className="text-sm text-gray-400 mt-1">Web Developer</p>
        </div>

        <div className="flex flex-col flex-1 justify-between">
          <nav className="w-full border-b border-gray-700 py-6">
            <ul className="space-y-4">
              {[
                { label: "Home", to: "home", icon: <Home size={20} /> },
                { label: "About", to: "about", icon: <User size={20} /> },
                { label: "Skills", to: "skills", icon: <Code size={20} /> },
                { label: "Work", to: "work", icon: <Briefcase size={20} /> },
                { label: "Contact", to: "contact", icon: <Mail size={20} /> },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="flex items-center space-x-3 text-lg font-medium text-gray-300 hover:text-[#6F5A4B] transition duration-300 cursor-pointer"
                    activeClass="text-[#6F5A4B]"
                    spy={true}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-6 flex justify-center">{item.icon}</span>
                    <span className="text-sm ml-4">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-full border-t border-gray-700 py-6">
            <ul className="space-y-4">
              {[
                {
                  href: "https://linkedin.com/in/muskan-loach-70a956288",
                  icon: <FaLinkedin size={20} />,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/Muskan-7867",
                  icon: <FaGithub size={20} />,
                  label: "GitHub",
                },
                {
                  href: "mailto:muskanloach984@gmail.com",
                  icon: <Mail size={20} />,
                  label: "Email",
                },
                {
                  href: "https://drive.google.com/file/d/1b2ohDHV1PWO8R6n11eF9Vuk2nDUWFtsX/view",
                  icon: <AiOutlineFileText size={20} />,
                  label: "Resume",
                },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-[#6F5A4B] transition duration-300"
                  >
                    <span className="w-6 flex justify-center">{item.icon}</span>
                    <span className="text-sm ml-4">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 pt-6 border-t border-gray-700">
          &copy; {new Date().getFullYear()} Muskan Loach. All rights reserved.
        </div>
      </aside>
    </>
  );
};

export default Navbar;
