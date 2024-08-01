import { Home, Info, CloudLightning, Zap, Clock } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Try from "./pages/Try.jsx";
import FreeTrial from "./pages/FreeTrial.jsx";
import History from "./pages/History.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Try",
    to: "/try",
    icon: <CloudLightning className="h-4 w-4" />,
    page: <Try />,
  },
  {
    title: "Free Trial",
    to: "/free-trial",
    icon: <Zap className="h-4 w-4" />,
    page: <FreeTrial />,
  },
  {
    title: "History",
    to: "/history",
    icon: <Clock className="h-4 w-4" />,
    page: <History />,
  },
];
