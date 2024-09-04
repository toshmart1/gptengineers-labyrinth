import { HomeIcon, LogInIcon, UserPlusIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <LogInIcon className="h-4 w-4" />,
    page: <Login />,
  },
  {
    title: "Sign Up",
    to: "/signup",
    icon: <UserPlusIcon className="h-4 w-4" />,
    page: <SignUp />,
  },
];