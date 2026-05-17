import { FileSpreadsheet } from "lucide-react";

export default function GenerateExcelButton({ headers }) {
  const handleGenerate = () => {
    if (!headers || headers.length === 0) return;

    const csvContent = headers.join(",") + "\n";

    const blob = new Blob([csvContent], { type: "text/csv" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "template.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleGenerate}
      className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-lg 
      hover:border-green-500 hover:text-green-600 hover:scale-101 transition cursor-pointer"
    >
      <FileSpreadsheet size={14} />
      Generate Excel
    </button>
  );
}
