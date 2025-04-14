import { TypeAnimation } from "react-type-animation";

export default function JobTitle() {
  return (
    <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4">
      <TypeAnimation
        sequence={[
          "Software Engineer",
          1000,
          "Full Stack Developer",
          1000,
          "Web Developer",
          1000,
        ]}
        speed={50}
        wrapper="span"
        repeat={Infinity}
      />
    </h2>
  );
}
