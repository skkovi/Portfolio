import { useRef, useEffect } from "react";

export default function Modal(props) {
  const modalRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        props.onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props.onClose]);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50 pointer-events-auto">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-xl space-y-4 transition duration-300 ease-out scale-100 animate-[fadeIn_0.3s_ease-out_forwards]"
      >
        <h2 className="text-lg font-bold text-gray-900">{props.title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {props.description}
        </p>
        <ul className="list-disc list-outside pl-6 text-gray-700 text-sm leading-relaxed space-y-2">
          {props.responsibilties.map((res, index) => (
            <li key={index} className="text-gray-600 mb-2">
              {res}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-gray-500 italic">
          Skills: {props.skills}
        </p>
        <button
          onClick={props.onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
