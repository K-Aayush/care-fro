import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "./AuthContext";
import type { UserProfile } from "../lib/api/auth.api";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    const userDataCookie = Cookies.get("userData");

    if (accessToken && userDataCookie) {
      try {
        const userData = JSON.parse(userDataCookie);
        setUser(userData);
      } catch (error) {
        console.error("Failed to parse user data:", error);
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        Cookies.remove("userData");
      }
    }
    setIsLoading(false);
  }, []);

  const login = (
    accessToken: string,
    refreshToken: string,
    userData: UserProfile
  ) => {
    Cookies.set("accessToken", accessToken, {
      expires: 7,
      secure: true,
      sameSite: "strict",
    });

    Cookies.set("refreshToken", refreshToken, {
      expires: 7,
      secure: true,
      sameSite: "strict",
    });

    Cookies.set("userData", JSON.stringify(userData), {
      expires: 7,
      secure: true,
      sameSite: "strict",
    });

    setUser(userData);
  };

  const logout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    Cookies.remove("userData");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
