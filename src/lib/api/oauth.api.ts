import { apiClient } from "./client";
import type { LoginResponse } from "./auth.api";

export interface OAuthLoginRequest {
  idToken: string;
  provider: "google" | "apple";
}

export const oauthApi = {
  login: async (data: OAuthLoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>(
      "/auth/oauth/login",
      data
    );
    return response.data;
  },
};
