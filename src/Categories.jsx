import Category from './Category';

export default function Categories({ categories, selectedCategoryId, onClick }) {
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
            selectedCategoryId={selectedCategoryId}
            onClick={onClick}
          />
        ))
      }
    </ul>
  );
}
