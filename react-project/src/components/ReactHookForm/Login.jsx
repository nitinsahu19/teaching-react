
import { useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert("Login successful!");  
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl text-black">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Login to Your Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register("email")}
              className={`w-full px-4 py-2 border rounded-lg  ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              {...register("password")}
              className={`w-full px-4 py-2 border rounded-lg  ${errors.password ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200">
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Don't have an account?
          <Link to="/SignUp" className="text-indigo-600 hover:underline ml-1">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}
export default Login;