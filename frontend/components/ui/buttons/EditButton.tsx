import { Edit } from "lucide-react";

export default function EditButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 px-2 py-2 text-xs rounded-lg border border-gray-300 
      hover:border-green-500 hover:text-green-600 hover:scale-101 transition cursor-pointer"
    >
      <Edit size={16} />
    </button>
  );
}
