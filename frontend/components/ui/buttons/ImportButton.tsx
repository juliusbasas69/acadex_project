import { Upload } from "lucide-react";

export default function ImportButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-lg 
      hover:border-green-500 hover:text-green-600 hover:scale-101 transition cursor-pointer"
    >
      <Upload size={14} />
      Import
    </button>
  );
}
