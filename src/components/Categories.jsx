import Category from './Category';

export default function Categories({ categories, selectCategory, selectedCategoryId = null }) {
  const isSelected = (category) => {
    if (selectedCategoryId === null) return false;

    return category.id === selectedCategoryId;
  };

  if (!categories.length) {
    return (
      <p>
        카테고리를 불러오지 못했습니다.
      </p>
    );
  }

  return (
    <ul>
      {
        categories.map((category) => (
          <li key={category.id}>
            <Category
              category={category}
              isSelected={isSelected(category)}
              onClick={selectCategory}
            />
          </li>
        ))
      }
    </ul>
  );
}
