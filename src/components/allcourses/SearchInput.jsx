"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react"; // or any icon you prefer

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") || "");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (value) params.set("q", value);
    router.push(`/all-courses?${params.toString()}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-white shadow-sm">
      <input
        type="text"
        placeholder="Search Courses"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 outline-none text-sm text-gray-600 placeholder:text-gray-400 bg-transparent"
      />
      <button onClick={handleSearch} className="text-gray-400 hover:text-[#002f5f] transition-colors">
        <Search size={16} />
      </button>
    </div>
  );
};

export default SearchInput;