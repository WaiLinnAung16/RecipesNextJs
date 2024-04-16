import React from "react";
import { getCategory } from "../services/api";
import { CategoryProps } from "@/types";
import Category from "./Category";

const Categories = async () => {
  const { categories } = await getCategory();
  return (
    <div className="w-[600px] bg-slate-50 rounded-full  p-3 px-5 overflow-x-scroll flex gap-3 scrollbar-none font-sans">
      {categories.map((category: CategoryProps) => (
        <Category category={category} />
      ))}
    </div>
  );
};

export default Categories;
