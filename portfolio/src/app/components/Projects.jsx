export default function Projects(props) {
  return (
    <div className="border-black p-4 rounded shadow hover:scale-105 hover:shadow-lg transition cursor-pointer">
      <h3 className="text-2xl font-bold text-black">{props.title}</h3>
      <p className="text-gray-700">{props.description}</p>
    </div>
  );
}
