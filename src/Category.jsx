export default function Category({ categoryData, selectedData, onClick }) {
  return (
    <>
      {categoryData?.map((category) => (
        <button
          type="button"
          key={category.id}
          onClick={() => onClick(category)}
        >
          {selectedData?.selectedCategory?.name === category.name ? `${category.name} v` : category.name}
        </button>
      ))}
    </>
  );
}
