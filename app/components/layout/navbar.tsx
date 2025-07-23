"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between w-full p-1">
      <div className="flex items-center gap-1">
        <Image
          src="/polar_bear_icon.jpeg"
          alt="Next.js logo"
          width={30}
          height={10}
          priority  
        />
        <p className="text-xl  font-[var(--font-geist-sans)] tracking-tight text-gray-900">AskDB</p>
      </div>
      <ul className="flex gap-4 justify-center flex-1">
        <li><a className="hover:underline hover:underline-offset-4" href="/blogs" rel="noopener noreferrer">Blogs</a></li>
        <li><a className="hover:underline hover:underline-offset-4" href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">Examples</a></li>
        <li><a className="hover:underline hover:underline-offset-4" href="#">Docs</a></li>
      </ul>
      <div>
        <a 
        href={"/signin"}
          // onClick={() => {
          //   router.push("/signin");
          // }}
          className="border rounded-full px-4 py-1 border-[1px] border-black/[.2] cursor-pointer"
        >
          Sign in
        </a>
      </div>
    </nav>
  );
} 