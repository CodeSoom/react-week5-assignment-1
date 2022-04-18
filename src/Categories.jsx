import { nameFunctions } from './helper';

export default function Categories({ categories, onSelect, selectCategoryId }) {
  function handleClick(id) {
    onSelect(id);
  }

  return (
    <ul>
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => handleClick(category.id)}
        >
          {nameFunctions[category.id === selectCategoryId](category.name)}
        </button>
      ))}
    </ul>
  );
}
