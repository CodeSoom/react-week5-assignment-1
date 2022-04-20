export default function Categories({ categories, categoryId, onCategoryClick }) {
  if (!categories || categories.length === 0) {
    return <>카테고리가 없어요!</>;
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button" onClick={() => onCategoryClick({ value: category.id })}>
            {category.name}
            {categoryId === category.id ? '(V)' : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
