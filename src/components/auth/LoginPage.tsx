import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import caredeviBrand from "../../assets/caredeviBrand.png";

const LoginPageUI = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="bg-[#fffdf4] w-full min-h-screen">
      <main className="flex flex-col items-center justify-center">
        <img
          className="mt-12 w-[310px] h-40 object-cover mb-6"
          alt="CareDevi Brand"
          src={caredeviBrand}
        />
        <div onSubmit={handleLogin} className="min-w-[500px]">
          <form className="space-y-6">
            <div className="space-y-4">
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-2 border-gray-300 focus:border-black focus:ring-black"
                required
              />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 border-2 border-gray-300 focus:border-black focus:ring-black"
                required
              />
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-2 border-gray-300 rounded"
                  />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-black font-medium hover:underline">
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-40 h-12 bg-black hover:bg-gray-800 text-white text-lg font-semibold rounded-md cursor-pointer"
              >
                Sign In
              </Button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
            </div>
          </div>
          <p className="text-center mt-8 text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-black font-semibold hover:underline">
              Sign up now
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPageUI;
