import { FileSpreadsheet } from "lucide-react";

export default function ExportButton({ data }) {
  const handleExcel = () => {
    const headers = ["Full Name", "Email", "Section", "Course", "Year", "Role"];

    const rows = data.map((u) => [
      u.fullName,
      u.email,
      u.section,
      u.course,
      u.year,
      u.role,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "users.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExcel}
      className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-lg 
      hover:border-green-500 hover:text-green-600 hover:scale-101 transition cursor-pointer "
    >
      <FileSpreadsheet size={14} />
      Excel
    </button>
  );
}
