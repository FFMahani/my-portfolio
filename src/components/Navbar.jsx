import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showClose, setShowClose] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      const timer = setTimeout(() => setShowClose(true), 400); // delay less than slide-in duration
      return () => clearTimeout(timer);
    } else {
      setShowClose(false); // instantly hide on close
    }
  }, [menuOpen]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/resume", label: "Resume" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-navbar-gradient text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center z-[10001]">
          <img
            src={logo}
            alt="Fouladi Dev Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium tracking-wide">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative group transition duration-300 ${
                  isActive
                    ? "text-white font-bold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* Burger Icon */}
        {!menuOpen && (
          <div className="md:hidden fixed top-6 right-6 z-[10001] w-10 h-10">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-3xl"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        )}
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[10000]"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 sm:w-2/5 bg-gradient-to-br from-[#4ca7d8] via-[#0a6ab3] to-[#073b7c] text-white z-[10001] transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-8 text-xl font-semibold tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:scale-105 hover:opacity-90 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Close Icon - Delayed render */}
      {showClose && (
        <div className="md:hidden fixed top-6 right-6 z-[10002] w-10 h-10">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-white"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
