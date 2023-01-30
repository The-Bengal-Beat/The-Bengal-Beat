import { MenuItem, Select } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

export const PostForm = () => {
  const { control } = useForm()

  return (
    <div className="m-4 flex flex-row justify-start">
      <Controller
        name="writer"
        control={control}
        render={({ field }) => (
          <Select {...field}>
            <MenuItem value="Writer One">Writer One</MenuItem>
            <MenuItem value="Writer Two">Writer Two</MenuItem>
            <MenuItem value="Writer Three">Writer Three</MenuItem>
          </Select>
        )}
      />
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <Select {...field}>
            <MenuItem value="Category One">Category One</MenuItem>
            <MenuItem value="Category Two">Category Two</MenuItem>
            <MenuItem value="Category Three">Category Three</MenuItem>
          </Select>
        )}
      />
    </div>
  );
};
