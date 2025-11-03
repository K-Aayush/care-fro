import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";
import caredeviLogo from "../assets/caredeviBrand.png";

const DashboardNavbar = () => {
  const location = useLocation();
  const { user } = useAuth();

  const navItems = [
    { name: "Home", path: "/dashboard", count: 0 },
    { name: "Appointments", path: "/dashboard/appointments", count: 8 },
    { name: "Patients", path: "/dashboard/patients", count: 2 },
    { name: "Inbox", path: "/dashboard/inbox", count: 2 },
    { name: "Prescriptions", path: "/dashboard/prescriptions", count: 8 },
    { name: "Tasks", path: "/dashboard/tasks", count: 0 },
  ];

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-12">
          <img
            src={caredeviLogo}
            alt="CareDevi"
            className="h-10 object-contain"
          />

          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-lg font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                } ${
                  isActive(item.path)
                    ? "bg-gray-100 px-4 py-2 rounded-full"
                    : ""
                }`}
              >
                {item.name}
                {item.count > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full">
                    {item.count}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-semibold">
            {user?.firstName?.charAt(0).toUpperCase() || "U"}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
