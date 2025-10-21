import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import caredeviBrand from "../../assets/caredeviBrand.png";
import {
  loginSchema,
  type LoginFormData,
} from "../../lib/validations/auth.schema";
import { useLogin } from "../../hooks/useLogin";

const LoginPageUI = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate: login, isPending, isError, error } = useLogin();

  const onSubmit = (data: LoginFormData) => {
    login(data);
  };

  return (
    <div className="bg-[#fffdf4] w-full min-h-screen">
      <main className="flex flex-col items-center justify-center">
        <img
          className="mt-12 w-[310px] h-40 object-cover mb-6"
          alt="CareDevi Brand"
          src={caredeviBrand}
        />
        <div className="min-w-[500px]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              {isError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">
                    {error?.message || "Login failed. Please try again."}
                  </p>
                </div>
              )}
              <div>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email")}
                  className="h-12 border-2 border-gray-300 focus:border-black focus:ring-black"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                  className="h-12 border-2 border-gray-300 focus:border-black focus:ring-black"
                  required
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>
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
                disabled={isPending}
                className="w-40 h-12 bg-black hover:bg-gray-800 text-white text-lg font-semibold rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? "Signing In..." : "Sign In"}
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
