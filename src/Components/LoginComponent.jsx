import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/main_logo.jpg";


export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailDisabled, setIsEmailDisabled] = useState(false);
  const [isPasswordDisabled, setIsPasswordDisabled] = useState(false);
  const navigate = useNavigate();

  const handleEmailFocus = () => {
    if (!isEmailDisabled) {
      setEmail("fulan2024@gmail.com");
      setIsEmailDisabled(true);
    }
  };

  const handlePasswordFocus = () => {
    if (!isPasswordDisabled) {
      setPassword("fulan_29024#");
      setIsPasswordDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const isButtonDisabled = !email || !password;

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center rgb-gradient">
      {/* Main Content */}
      <div className="lex flex-col justify-center items-center md:max-w-xl md:w-full w-96 mx-auto my-5 p-8 bg-gray-800 rounded-lg shadow-mdz-10 rgb-border">
        <div className="flex justify-center items-center mb-2">
          {/* Gambar logo untuk halaman login */}
          <img className="md:w-full h-40 object-cover w-full mb-2" src={Logo} alt="" />
        </div>
        <h2 className="md:text-2xl text-xl font-semibold text-center text-white mb-4">
          Login to your account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onFocus={handleEmailFocus}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isEmailDisabled}
              className="mt-1 block w-full px-3 py-2 rgb-input rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onFocus={handlePasswordFocus}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isPasswordDisabled}
              className="mt-1 block w-full px-3 py-2 rgb-input rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="remember_me" className="flex items-center">
              <input
                type="checkbox"
                id="remember_me"
                name="remember_me"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 block text-sm text-white">Remember me</span>
            </label>
            <a href="#" className="text-sm font-medium text-blue-500 hover:underline">
              Forgot your password?
            </a>
          </div>
          <div>
            <button className="w-full rgb-button hover:italic flex justify-center items-center gap-3 border-rgb border-4 rounded-md shadow-md text-sm font-medium text-white transition ease-in-out">
              <img
                className="w-7"
                src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                alt="Google Icon"
              />
              Sign in with Google
            </button>
          </div>
          <div>
            <button className="w-full bg-blue-600 rgb-button py-2 px-4 hover:bg-blue-700 hover:italic flex justify-center items-center gap-3 rounded-md shadow-md text-sm font-medium text-white transition ease-in-out">
              <img
                className="w-7"
                src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                alt="Facebook Icon"
              />
              Sign in with Facebook
            </button>
          </div>
          <div>
            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`w-full flex justify-center py-2 px-4 border-rgb border-transparent hover:italic rounded-md shadow-md text-sm font-medium text-white transition ease-in-out ${
                isButtonDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "rgb-button"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-400">
          Dont have an account?{" "}
          <a href="/" className="font-medium text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
