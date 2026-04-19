import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Logo + Title */}
        <div className="flex flex-row items-center gap-2 mb-6">
          <Image
            src="/logo/logo.png"
            alt="Acadex Logo"
            width={180}
            height={180}
            className="w-10 h-10"
            priority
          />
          <span className="text-2xl font-bold text-green-600">Acadex</span>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form className="flex flex-col">
          {/* First Name */}
          <div className="flex flex-col mb-3">
            <label className="text-sm mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col mb-3">
            <label className="text-sm mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your last name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col mb-3">
            <label className="text-sm mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col mb-3">
            <label className="text-sm mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 hover:scale-105 transition cursor-pointer"
          >
            Register
          </button>

          <div className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-green-600 font-medium cursor-pointer"
            >
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
