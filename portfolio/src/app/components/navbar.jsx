import Link from "next/link";
export default function Nav() {
  return (
    <header className="w-full px-8 py-2 flex justify-between items-center shadow bg-white fixed top-0 left-0 z-50">
      <div className="text-xl font-bold">Kevin Koudelka</div>
      <nav className="space-x-6 text-gray-500 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
