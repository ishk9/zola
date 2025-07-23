"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSignIn(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Dummy sign-in logic
    setTimeout(() => {
      setLoading(false);
      // On success, redirect to home
      router.push("/");
    }, 1000);
  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center px-4">
      <form onSubmit={handleSignIn} className="w-full max-w-md bg-white p-8 md:p-10  flex flex-col gap-2 items-center">
        <Image src="/polar_bear_icon.jpeg" alt="AskDB logo" width={64} height={64} />

        <div>
            <h1 className="text-2xl font-md text-center font-[var(--font-geist-sans)]">Welcome back!</h1>
            <p className="text-sm text-center font-[var(--font-geist-sans)] mb-2">Sign in to your account to continue</p>
        </div>

        <div className="flex flex-col gap-3 w-full justify-center items-center">
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
          </div>

          <div className="w-[85%] flex justify-end">
            <p className="text-[12px] hover:underline text-center font-[var(--font-geist-sans)] mb-2">Forgot password?</p>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          type="submit"
          className="w-[85%] py-2 mt-8 rounded-xl bg-black text-white font-md hover:bg-gray-900 transition text-base mt-2 shadow-sm"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
        <p className="text-center text-sm text-gray-500 mt-2">
          Don't have an account?{' '}
          <Link href="/signup" className="text-black hover:underline font-medium">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
