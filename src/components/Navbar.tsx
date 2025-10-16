import { Button } from "./ui/button";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#fffdf4]  w-full">
      <header className="flex items-center justify-between px-6 sm:px-12 pt-6">
        <img
          className="sm:w-[190px] w-36 h-12 sm:h-[63px] object-cover"
          alt="CareDevi Logo"
          src={logo}
        />

        <nav className="flex items-center gap-1 sm:gap-4">
          <Button
            variant="ghost"
            className="h-auto font-medium text-black text-lg sm:text-2xl hover:bg-transparent cursor-pointer"
          >
            Login
          </Button>
          <Button
            variant="ghost"
            className="h-auto font-medium text-black text-lg sm:text-2xl hover:bg-transparent cursor-pointer"
          >
            Sign Up
          </Button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
