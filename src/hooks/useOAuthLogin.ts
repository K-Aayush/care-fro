import { useMutation } from "@tanstack/react-query";
import { oauthApi, type OAuthLoginRequest } from "../lib/api/oauth.api";
import { useAuth } from "../contexts/useAuth";
import { useNavigate } from "react-router-dom";

export const useOAuthLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: OAuthLoginRequest) => oauthApi.login(data),
    onSuccess: (response) => {
      const { user, accessToken, refreshToken } = response.data;
      login(accessToken, refreshToken, user);
      navigate("/dashboard");
    },
  });
};
