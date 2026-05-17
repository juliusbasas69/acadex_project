"use client";

type CreateButtonProps = {
  icon?: React.ReactNode;
  label: string;
  onClick?: () => void;
};

export default function CreateButton({
  icon,
  label,
  onClick,
}: CreateButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg 
      hover:bg-green-700 hover:scale-101 transition cursor-pointer"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
