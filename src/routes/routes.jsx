import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import CV from "../pages/CV";

const routes = [
  {
    path: "/",
    label: "Home",
    element: <Home />,
  },
  {
    path: "/about",
    label: "About",
    element: <About />,
  },
  {
    path: "/projects",
    label: "Projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    label: "Contact",
    element: <Contact />,
  },
  {
    path: "/resume",
    label: "Resume",
    element: <Resume />,
  },
];

export default routes;
