export default function Categories({ categories, onClickCategory, checkedCategoryId }) {
  return (
    <ul>
      {categories
        && categories.map((category) => (<li key={category.id}><button type="button" data-id={category.id} onClick={onClickCategory}>{checkedCategoryId === category.id ? `${category.name}(V)` : category.name}</button></li>))}
    </ul>
  );
}
