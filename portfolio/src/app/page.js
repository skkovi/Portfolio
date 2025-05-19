"use client";
import Link from "next/link";
import Image from "next/image";
import Projects from "./components/Projects";
import HeroName from "./components/HeroName";
import JobTitle from "./components/JobTitle";
import BackgroundParticles from "./components/BackgroundParticles";
import { useState } from "react";
import Modal from "./components/Modal";
import { TypeAnimation } from "react-type-animation";

let projects = [
  {
    key: 1,
    title: "Department of Labor Forms Management",
    description:
      "Project involves Forms Management Team working collaboratively to streamline the current communication process by consolidating forms and creating a single platform for consistency. The team aims to enhance the user experience by providing a standardization of forms. Through the duration of the project, inventory capabilities will be enhanced.",
    skills:
      "JIRA, SharePoint, Inspire Designer, Inspire Interactive, Adobe Pro",
    responsibilties: [
      "Designing new forms to meet the growing needs of the agency",
      "Coordinated Forms Management Team to ensure that all forms are completed in a timely manner",
      "Due to efficient performance, selected to assist with the testing environment",
      "Experience in creating forms in 20+ different languages, ensuring accessibility and usability across diverse linguistic audiences.",
      "Identified any bugs occurring in the forms as well as updating them",
      "Conducted maintenance activities on the application, including status reporting and providing regular updates to management team using wellness status e-mails and calls",
    ],
  },
  {
    key: 2,
    title: "Data Migration and Analytics",
    description:
      "Project involved the data movement between multiple servers including MPP data warehouse, No-SQL Google firebase, and Service-Now (Cloud computing platform). It maintained data in its own azure synapses (SaaS) for analysis purposes. It had a user interface for extracting distinct types of analytics and reports.",
    skills:
      "SQL, SQL Developer, ServiceNow, Azure devOPs, Azure pipelines, JavaScript, Google Firebase, Cloud Functions, Azure Logical Apps, Node.js (Express)",
    responsibilties: [
      "Designed functionality for scalable architecture to solve business problems using various Azure Components like Data Factory, Data Lake, Storage, and Synapse",
      "Created and maintained databases containing client’s data",
      "Designed and tested Azure pipeline architecture to successfully meet the client’s required solutions",
      "Collaborated as part of a five-member team to enhance development and testing",
      "Obtained a solid understanding of embedded application development by creating, testing, and deploying applications on production hardware",
      "Utilized experience in Microsoft SQL Server and advanced SQL programming to implement and employ analytical functions, subqueries, and set operators",
    ],
  },
  {
    key: 3,
    title: "Internal Project Development",
    description:
      "Performed internship for Nagarro, Inc. Project involved the development of iOS and Android application for purposeful internal inventory tracking. Contained an interface that provided contextual information to warehouse workers to enhance the efficiency of their job.",
    skills: "Firebase, JavaScript, node.js, CSS",
    responsibilties: [
      "Created and maintained a web application containing warehouse workers’ data",
      "Produced and maintained a firebase database for devices in client’s warehouse",
      "Developed a login system with various roles and permissions depending on job title",
      "Collaborated with a team to efficiently meet employer’s guidelines",
      "Obtained the fundamental aspects of JavaScript and Node.js to complete the project in a timely manner",
    ],
  },
];
const skills = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  Backend: ["Node.js", "Express", "Firebase", "Supabase", "SQL"],
  Languages: ["JavaScript", "Python", "TypeScript"],
  Tools: ["Git", "Azure", "VS Code", "Postman"],
};

export default function Home() {
  let [showModal, setShowModal] = useState(false);
  let [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="relative">
      <BackgroundParticles />
      <main className="relative z-10">
        <section
          id="home"
          className="px-8 pt-32 pb-20 border-b border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <HeroName />
            <JobTitle />
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              I am a software developer with a passion for creating innovative
              solutions.
            </p>
            <Link
              href="/#projects"
              className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              View Projects
            </Link>
          </div>
          <div className="flex justify-end items-start">
            <div className="bg-black text-green-400 font-mono w-full max-w-xl rounded-lg shadow-lg">
              <div className="flex space-x-2 p-2 bg-gray-800 rounded-t-lg">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <div className="p-4 text-sm space-y-1">
                <div className="p-4 text-sm space-y-1 font-mono text-green-400">
                  <div className="p-4 text-sm space-y-1 font-mono text-green-400">
                    <TypeAnimation
                      sequence={[
                        "> 3+ years of experience in software development",
                      ]}
                      speed={40}
                      wrapper="p"
                      cursor={false}
                    />
                    <TypeAnimation
                      sequence={["> 3 deployed projects"]}
                      speed={40}
                      wrapper="p"
                      cursor={false}
                      delay={1500}
                    />
                    <TypeAnimation
                      sequence={["> Scroll down to learn more!"]}
                      speed={40}
                      wrapper="p"
                      cursor={true}
                      delay={3000}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="px-8 pt-24 pb-20 border-b border-gray-200"
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
                I am a versatile Software Engineer with a BS in Computer Science
                and over three years of experience delivering full-stack,
                embedded, and cloud-based applications. My expertise encompasses
                a range of technologies, including JavaScript, Node.js, React,
                Python, and Firebase, enabling me to design and implement
                scalable solutions. Throughout my career at Nagarro Inc., I have
                consistently focused on developing efficient and user-friendly
                applications, contributing to projects such as the creation of
                multilingual digital forms to enhance accessibility and the
                development of an internal inventory tracking system. I am
                passionate about leveraging my technical skills to solve complex
                problems and drive positive outcomes.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-4">
                My experience includes engineering a quality control protocol
                for the NYC Department of Education and streamlining the
                production of digital forms for the Department of Labor. I have
                a proven track record of collaborating effectively within Agile
                teams, ensuring on-time delivery, and providing key support
                through maintenance and issue resolution. I am committed to
                producing high-quality work, demonstrated by my selection to
                support testing environment operations, and I strive to apply my
                skills to create solutions that improve efficiency, enhance user
                experience, and meet client needs.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-4">
                I’m passionate about solving real-world problems with clean,
                efficient code, and I bring a user-focused mindset to everything
                I build. I’m currently seeking opportunities to join a
                collaborative engineering team where I can continue growing my
                skills and contribute to impactful, product-driven development.
              </p>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="px-8 pt-24 pb-20 border-b border-gray-200"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projects
            </h2>
            <h3 className="text-xl text-gray-500 italic mb-4">
              Click for more details
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {showModal && selectedProject && (
              <Modal
                title={selectedProject.title}
                description={selectedProject.description}
                skills={selectedProject.skills}
                responsibilties={selectedProject.responsibilties}
                onClose={() => setShowModal(false)}
              />
            )}
            {projects.map((project) => {
              return (
                <Projects
                  key={project.key}
                  onClick={() => {
                    setSelectedProject(project);
                    setShowModal(true);
                  }}
                  title={project.title}
                  description={project.description}
                  responsibilties={project.responsibilties}
                />
              );
            })}
          </div>
        </section>
        <section id="resume" className="flex px-8 pt-24 pb-20">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Skills
            </h2>
            <div className="max-w-3xl">
              <table className="min-w-full border border-gray-200 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800 text-left">
                    <th className="px-4 py-3 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                      Category
                    </th>
                    <th className="px-4 py-3 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                      Skills
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(skills).map(([category, skills]) => (
                    <tr
                      key={category}
                      className="border-t border-gray-200 dark:border-gray-700"
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {category}
                      </td>
                      <td className="px-4 py-3 text-gray-800">
                        {skills.join(", ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col mx-16 md:flex-row justify-center gap-25">
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
              <a href="mailto:skkovi14@gmail.com">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Email Me
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-koudelka/"
                target="_blank"
                className="ml-4"
              >
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  LinkedIn
                </button>
              </a>
              <a
                href="https://github.com/skkovi"
                target="_blank"
                className="ml-4"
              >
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Github
                </button>
              </a>
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
      </main>
    </div>
  );
}
