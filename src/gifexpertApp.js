import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  // const categories = ["One punch", "Sanurai jack", "Boku no píck"];
  const [categories, setCategories] = useState(["One punch"]);

  // const handleAdd = () => {
  //   setCategories(["Hola x Hola", ...categories]);
  // };
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr></hr>
      <AddCategory setCategories={setCategories} />
      {/* <AddCategory /> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category}></GifGrid>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
