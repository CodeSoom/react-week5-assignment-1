import Category from './Category';

export default function Categories({ categories, selectedCategoryId, onClick }) {
  const isSelected = (category) => {
    if (selectedCategoryId === null) {
      return false;
    }

    return category.id === selectedCategoryId;
  };

  if (!categories.length) {
    return <p>카테고리가 없어요!</p>;
  }

  return (
    <ul>
      {
        categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            isSelected={isSelected(category)}
            onClick={onClick}
          />
        ))
      }
    </ul>
  );
}
