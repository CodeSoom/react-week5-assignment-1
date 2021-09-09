import React from "react";

import Categories from "./Categories";

export default function App() {
  const categories = [
    { id: 1, name: '한식' },
  ];
  return (
    <div>
      <Categories categories={categories} />
    </div>
  );
}
