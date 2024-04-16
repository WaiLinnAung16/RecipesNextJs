"use client";
import { CategoryProps } from "@/types";
import React, { useState } from "react";

const Category = ({ category }: { category: CategoryProps }) => {
  const [selectedCate, setSelectedCate] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setSelectedCate(id);
  };

  return (
    <p
      key={category.idCategory}
      onClick={() => handleClick(category.idCategory)}
      className={`${
        selectedCate === category.idCategory ? "text-pink-600" : "text-black"
      }`}
    >
      {category.strCategory}
    </p>
  );
};

export default Category;
