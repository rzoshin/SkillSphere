"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { TextField, InputGroup, Button, SearchFieldSearchIcon } from "@heroui/react";

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
    <TextField className="w-60">
      <InputGroup>
        <InputGroup.Input
          type="text"
          placeholder="Search Courses"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <InputGroup.Suffix>
          <Button variant="text" color="accent" onPress={handleSearch}>
            <SearchFieldSearchIcon />
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
  );
};

export default SearchInput;