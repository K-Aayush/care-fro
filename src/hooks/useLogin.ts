import { useMutation } from "@tanstack/react-query";
import { authApi, type LoginRequest } from "../lib/api/auth.api";
import { useAuth } from "../contexts/useAuth";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (credentials: LoginRequest) => authApi.login(credentials),
    onSuccess: (response) => {
      const { user, accessToken, refreshToken } = response.data;
      login(accessToken, refreshToken, user);
      navigate("/");
    },
  });
};
