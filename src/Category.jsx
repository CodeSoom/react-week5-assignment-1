export default function Category({ categories, selectedRegionAndCategory, onClick }) {
  return (
    <>
      {categories?.map((category) => (
        <button
          type="button"
          key={category.id}
          onClick={() => onClick(category)}
        >
          {selectedRegionAndCategory?.selectedCategory?.name === category.name ? `${category.name} v` : category.name}
        </button>
      ))}
    </>
  );
}
