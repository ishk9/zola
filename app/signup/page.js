import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center px-4">
      <form className="w-full max-w-md bg-white p-8 md:p-10  flex flex-col gap-2 items-center">
        <Image src="/polar_bear_icon.jpeg" alt="AskDB logo" width={64} height={64} />

        <div>
            <h1 className="text-2xl font-md text-center font-[var(--font-geist-sans)]">Welcome back!</h1>
            <p className="text-sm text-center font-[var(--font-geist-sans)] mb-2">Sign in to your account to continue</p>
        </div>

        <div className="flex flex-col gap-3 w-full justify-center items-center">
          {/* Username input */}
          <div className="relative w-[85%]">
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="peer px-3 py-2 border border-gray-300 rounded-xl w-[100%] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 bg-white text-base placeholder:text-sm"
              placeholder="Username"
            />
          </div>
          {/* Floating label input */}
          <div className="relative w-[85%]">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="peer px-3 py-2 border border-gray-300 rounded-xl w-[100%] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 bg-white text-base placeholder:text-sm"
              placeholder="Email"
            />
            {/* <label htmlFor="email" className="absolute left-3 top-3 text-gray-500 text-sm transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-gray-700 bg-white px-1">Email</label> */}
          </div>
          <div className="relative w-[85%]">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="peer px-3 py-2 border border-gray-300 rounded-xl w-[100%] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 bg-white text-base placeholder:text-sm"
              placeholder="Password"
            />
            {/* <label htmlFor="password" className="absolute left-3 top-3 text-gray-500 text-sm transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-gray-700 bg-white px-1">Password</label> */}
          </div>

          {/* Remove the forgot password section */}
        </div>

        <button
          type="submit"
          className="w-[85%] py-2 mt-8 rounded-xl bg-black text-white font-md hover:bg-gray-900 transition text-base mt-2 shadow-sm"
        >
          Sign up
        </button>
        <p className="text-center text-sm text-gray-500 mt-2">
          Already have an account?{' '}
          <Link href="/signin" className="text-black hover:underline font-medium">Sign in</Link>
        </p>
      </form>
    </div>
  );
}
