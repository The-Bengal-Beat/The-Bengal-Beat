import { InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

export const PostForm = () => {
  const { control } = useForm();

  return (
    <div className="m-4 flex flex-row justify-start">
      <Controller
        name="writer"
        control={control}
        render={({ field }) => (
          <>
            <InputLabel id="writer-input">Writer</InputLabel>
            <Select labelId="writer-input" label="Writer" {...field}>
              <MenuItem value="Writer One">Writer One</MenuItem>
              <MenuItem value="Writer Two">Writer Two</MenuItem>
              <MenuItem value="Writer Three">Writer Three</MenuItem>
            </Select>
          </>
        )}
      />
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <>
            <InputLabel id="category-input">Category</InputLabel>
            <Select labelId="category-input" label="Category" {...field}>
              <MenuItem value="Category One">Category One</MenuItem>
              <MenuItem value="Category Two">Category Two</MenuItem>
              <MenuItem value="Category Three">Category Three</MenuItem>
            </Select>
          </>
        )}
      />
    </div>
  );
};
