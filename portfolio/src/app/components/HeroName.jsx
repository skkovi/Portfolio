import { TypeAnimation } from "react-type-animation";

export default function HeroName() {
  return (
    <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
      <span className="text-blue-500">&gt;</span>{" "}
      <TypeAnimation
        sequence={["Kevin Koudelka"]}
        speed={50}
        wrapper="span"
        repeat={0}
      />
    </h1>
  );
}
