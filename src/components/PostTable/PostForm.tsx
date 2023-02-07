import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { Control } from "react-hook-form";
import { getCategories } from "../../utils/getCategories";
import type { IGetCategoriesResponse } from "../../utils/getCategories";
import { parseHTML } from "../../utils/parseHTML";

export const PostForm: React.FC = () => {
  const { control } = useFormContext();
  const [categories, setCategories] = useState<IGetCategoriesResponse>({
    data: [],
    error: "",
  });

  useEffect(() => {
    getCategories()
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex w-full flex-row justify-start py-4 px-2">
      <Controller
        name="search"
        control={control}
        render={({ field }) => (
          <TextField
            className="w-full"
            label="Search"
            variant="outlined"
            {...field}
          />
        )}
      />
      <div className="w-2" />
      <Controller
        name="writer"
        control={control}
        render={({ field }) => (
          <FormControl className="w-[300px] min-w-[300px]">
            <InputLabel id="writer-input-label">Writer</InputLabel>
            <Select labelId="writer-input-label" label="Writer" {...field}>
              <MenuItem value="Writer One">Writer One</MenuItem>
              <MenuItem value="Writer Two">Writer Two</MenuItem>
              <MenuItem value="Writer Three">Writer Three</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <div className="w-2" />
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <FormControl className="w-[300px] min-w-[300px]">
            <InputLabel id="category-input-label">Category</InputLabel>
            <Select
              labelId="category-input-label"
              label="Category"
              {...field}
              displayEmpty
            >
              <MenuItem value="">All</MenuItem>
              {categories.data.map((category) => {
                return (
                  <MenuItem key={category.id} value={category.id}>
                    {parseHTML(category.name)}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        )}
      />
    </div>
  );
};
