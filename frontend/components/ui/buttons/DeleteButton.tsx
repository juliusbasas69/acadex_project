import { Trash2 } from "lucide-react";

type DeleteButton = {
  onClick?: () => void;
};

export default function DeleteButton({ onClick }: DeleteButton) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-2 py-2 text-xs rounded-lg border border-gray-300 
      hover:border-green-500 hover:text-green-600 hover:scale-101 transition cursor-pointer"
    >
      <Trash2 size={16} />
    </button>
  );
}
