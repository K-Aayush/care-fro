import { apiClient } from "./client";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      middleName?: string;
      phoneNumber?: string;
      isEmailVerified: boolean;
      lastLogin: string;
      createdAt: string;
      updatedAt: string;
    };
    accessToken: string;
    refreshToken: string;
    tokenType: string;
    sessionId: string;
  };
}

export interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  phoneNumber?: string;
  isEmailVerified: boolean;
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
}

export const authApi = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const { data } = await apiClient.post<LoginResponse>(
      "/auth/login",
      credentials
    );
    return data;
  },

  logout: async (refreshToken?: string): Promise<void> => {
    await apiClient.post("/auth/logout", { refreshToken });
  },

  getProfile: async (): Promise<UserProfile> => {
    const { data } = await apiClient.get<{
      success: boolean;
      data: { user: UserProfile };
    }>("/auth/profile");
    return data.data.user;
  },

  refreshToken: async (refreshToken: string) => {
    const { data } = await apiClient.post("/auth/refresh-token", {
      refreshToken,
    });
    return data;
  },
};
