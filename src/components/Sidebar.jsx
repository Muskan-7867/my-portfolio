import { useState } from "react";
import { Briefcase, Code, Home, Mail, User, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { AiOutlineFileText } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md bg-[#202216] text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop toggle button */}
      <button
        onClick={toggleCollapse}
        className="hidden md:block fixed top-4 left-4 z-50 p-2 rounded-md bg-[#202216] text-white focus:outline-none"
      >
        {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`w-[14rem] h-screen bg-[#202216] text-white flex-col justify-between p-6 shadow-xl fixed transition-all duration-300 z-40 ${
          isOpen ? "left-0" : "-left-[14rem] md:left-0"
        } ${isCollapsed ? "md:w-20" : "md:w-[14rem]"}`}
      >
        {/* Header - only shown when not collapsed (desktop) or when open (mobile) */}
        <div className={`text-center border-b border-gray-700 pb-6 ${isCollapsed ? "hidden md:hidden" : "block"}`}>
          <h1 className="text-2xl font-bold tracking-tight">{"Muskan"}</h1>
          <p className="text-sm text-gray-400 mt-1">{"Web Developer"}</p>
        </div>

        <div className="flex flex-col flex-1 justify-between space-y-6">
          {/* Main Navigation */}
          <nav className="w-full border-b border-gray-700 py-8">
            <ul className="space-y-4">
              {[
                { label: "Home", to: "/", icon: <Home size={20} /> },
                { label: "About", to: "about", icon: <User size={20} /> },
                { label: "Skills", to: "skills", icon: <Code size={20} /> },
                { label: "Work", to: "work", icon: <Briefcase size={20} /> },
                { label: "Contact", to: "contact", icon: <Mail size={20} /> },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`flex items-center   text-gray-300 hover:text-[#6F5A4B] transition duration-300 cursor-pointer ${
                      isCollapsed ? "md:justify-center" : ""
                    }`}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <span className="w-6 flex justify-center">{item.icon}</span>
                    {/* Show text always on mobile, only when not collapsed on desktop */}
                    <span className={`text-sm ml-4 ${isCollapsed ? "md:hidden" : ""}`}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="w-full border-t border-gray-700 py-8">
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
                    className={`flex items-center text-gray-300 hover:text-[#6F5A4B] transition duration-300 ${
                      isCollapsed ? "md:justify-center" : ""
                    }`}
                  >
                    <span className="w-6 flex justify-center">{item.icon}</span>
                    {/* Show text always on mobile, only when not collapsed on desktop */}
                    <span className={`text-sm ml-4 ${isCollapsed ? "md:hidden" : ""}`}>
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer - only shown when not collapsed */}
        {!isCollapsed && (
          <div className="text-center text-xs text-gray-500 pt-6 mb-4 border-t border-gray-700">
            &copy; {new Date().getFullYear()} Muskan Loach. All rights reserved.
          </div>
        )}
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;