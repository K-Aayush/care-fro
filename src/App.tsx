import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SelectLoginPage from "./pages/auth/SelectPage";
import LoginPage from "./pages/auth/LoginPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { GuestRoute } from "./components/GuestRoute";
import DashboardNavbar from "./components/DashboardNavbar";
import DashboardHome from "./pages/dashboard/DashboardHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Navbar />
              <Home />
            </div>
          }
        />
        <Route
          path="/login-select"
          element={
            <GuestRoute>
              <div className="min-h-screen">
                <Navbar />
                <SelectLoginPage />
              </div>
            </GuestRoute>
          }
        />
        <Route
          path="/login"
          element={
            <GuestRoute>
              <div className="min-h-screen">
                <Navbar />
                <LoginPage />
              </div>
            </GuestRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <div className="min-h-screen">
                <DashboardNavbar />
                <DashboardHome />
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
