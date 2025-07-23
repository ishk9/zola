"use client";
import Image from "next/image";
import Navbar from "../components/layout/navbar"

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:px-8 sm:py-4 w-screen">
     <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center ">
        <Image
          src="/polar_bear_icon.jpeg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority  
        />
        <p className="font-mono list-inside list-decimal text-center sm:text-left text-4xl font-md">
          From questions to queries — instantly
          {/* Write prompts, not SQL. */}
        </p>  

        <p className="font-mono list-inside list-decimal text-center sm:text-left text-md">
          Just ask. We'll take care of the hard part.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#333] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >  
            Get Started
          </a>
          <a
            className="rounded-full border border-solid hover:border-black/[.08] transition-colors flex items-center justify-center bg-[#f2f2f2] border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
