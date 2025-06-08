import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/cv", label: "CV" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-navbar-gradient text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-3xl font-extrabold text-white tracking-wider">
          Fatemeh
        </h1>

        {/* Navigation */}
        <nav className="flex space-x-8 text-lg font-medium tracking-wide">
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
      </div>
    </header>
  );
};

export default Navbar;
