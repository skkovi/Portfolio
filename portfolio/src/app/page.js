"use client";
import Link from "next/link";
import Image from "next/image";
import Projects from "./components/Projects";
import { TypeAnimation } from "react-type-animation";
import { use } from "react";
import HeroName from "./components/HeroName";
import JobTitle from "./components/JobTitle";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="bg-white px-8 pt-30 pb-20 border-b border-gray-200"
      >
        <HeroName />
        <JobTitle />
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          I am a software developer with a passion for creating innovative
          solutions.
        </p>
        <Link
          href="/projects"
          className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          View Projects
        </Link>
      </section>
      <section
        id="about"
        className="bg-white px-8 pt-24 pb-20 border-b border-gray-200"
      >
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="w-50">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              About
            </h2>
            <Image
              className="rounded-full w-32 h-32 object-cover shadow"
              width={128}
              height={128}
              src="/Kev.jpeg"
              alt="Kevin Koudelka"
            />
          </div>
          <div className="w-full">
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              I am a software developer with a passion for creating innovative
              solutions. I have experience in web development, mobile
              development, and cloud computing. I am a team player and I am
              always looking to learn new skills and technologies.
            </p>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="bg-white px-8 pt-24 pb-20 border-b border-gray-200"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Projects title="Project One" description="Description" />
          <Projects title="Project Two" description="Description" />
          <Projects title="Project Three" description="Description" />
          <Projects title="Project Four" description="Description" />
        </div>
      </section>
      <section id="resume" className="bg-white px-8 pt-24 pb-20">
        <div className="flex flex-col md:flex-row justify-center gap-25">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Resume
            </h2>
            <h3 className="text-2xl md:text-xl font-normal text-gray-800 mb-4">
              Get in <b>Touch</b>
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Feel free to reach out to me via email!
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Email Me
            </button>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Education
            </h2>
            <h3 className="text-2xl md:text-xl font-bold text-gray-800">
              Bachelor of Science in Computer Science
            </h3>
            <h4 className="text-xl md:text-xl font-bold text-gray-800 mb-4">
              Minor in Cybersecurity
            </h4>
            <p className="text-lg md:text-xl text-gray-700">
              University of Delaware
            </p>
            <p className="text-lg md:text-md text-gray-700 mb-4">2018-2022</p>
          </div>
        </div>
      </section>
    </>
  );
}
