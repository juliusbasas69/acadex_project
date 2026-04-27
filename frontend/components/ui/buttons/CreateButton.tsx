"use client";

import { useRouter } from "next/navigation";

export default function CreateButton({ icon, label, path }) {
  const router = useRouter();

  const handleClick = () => {
    if (path) {
      router.push(path);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg 
      hover:bg-green-700 hover:scale-101 transition cursor-pointer"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
