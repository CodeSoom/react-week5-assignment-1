import React from 'react';

export default function Categories({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.name, category.id)}
          type="button"
        >
          {category.name === selectedCategory
            ? `${category.name}(V)`
            : category.name}
        </button>
      ))}
    </div>
  );
}
