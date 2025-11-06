import { useState } from "react";
import {
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import type { UserCredential } from "firebase/auth";
import { getFirebaseAuth } from "../lib/firebase/config";
import { useOAuthLogin } from "./useOAuthLogin";

export const useFirebaseAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { mutate: oauthLogin } = useOAuthLogin();

  const signInWithGoogle = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const auth = getFirebaseAuth();
      const provider = new GoogleAuthProvider();
      provider.addScope("email");
      provider.addScope("profile");

      const result: UserCredential = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      oauthLogin({
        idToken,
        provider: "google",
      });
    } catch (err: unknown) {
      console.error("Google sign-in error");
      setError(
        err instanceof Error ? err.message : "Failed to sign in with Google"
      );
      setIsLoading(false);
    }
  };

  const signInWithApple = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const auth = getFirebaseAuth();
      const provider = new OAuthProvider("apple.com");
      provider.addScope("email");
      provider.addScope("name");

      const result: UserCredential = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      oauthLogin({
        idToken,
        provider: "apple",
      });
    } catch (err: unknown) {
      console.error("Apple sign-in error:");
      setError(
        err instanceof Error ? err.message : "Failed to sign in with Apple"
      );
      setIsLoading(false);
    }
  };

  return {
    signInWithGoogle,
    signInWithApple,
    isLoading,
    error,
  };
};
