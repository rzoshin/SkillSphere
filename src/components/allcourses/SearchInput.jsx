"use client";
import { Button, InputGroup, SearchFieldSearchIcon, TextField } from "@heroui/react";
import React, { useState } from "react";

const SearchInput = () => {
    const [searchInp, setSearchInp] = useState("");
  return (
    <div>
      <TextField className="w-60" name="email">
        <InputGroup>
          <InputGroup.Input
          type="text"
          value={searchInp} 
          placeholder="Search Courses"
          onChange={e => {setSearchInp(e.target.value)}} />
          <InputGroup.Suffix>
            <Button variant="text" color="accent">
              <SearchFieldSearchIcon />
            </Button>
          </InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </div>
  );
};

export default SearchInput;
