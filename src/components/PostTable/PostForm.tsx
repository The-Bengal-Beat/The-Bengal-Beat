import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { getCategories } from "../../utils/getCategories";
import type { IGetCategoriesResponse } from "../../utils/getCategories";

export const PostForm = () => {
  const { control, watch } = useForm();
  const [categories, setCategories] = useState<IGetCategoriesResponse>({
    data: [],
    error: "",
  });

  const formValues = watch();

  useEffect(() => {
    getCategories()
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex w-full flex-row justify-start py-4 px-2">
      <Controller
        name="writer"
        control={control}
        render={({ field }) => (
          <FormControl className="w-[200px]">
            <InputLabel id="writer-input">Writer</InputLabel>
            <Select labelId="writer-input" label="Writer" {...field}>
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
          <FormControl className="w-[200px]">
            <InputLabel id="category-input">Category</InputLabel>
            <Select labelId="category-input" label="Category" {...field}>
              {categories.data.map((category) => {
                return (
                  <MenuItem
                    key={category.id}
                    value={category.name}
                    dangerouslySetInnerHTML={{ __html: category.name }}
                  />
                );
              })}
            </Select>
          </FormControl>
        )}
      />
      <p>{JSON.stringify(formValues)}</p>
    </div>
  );
};
