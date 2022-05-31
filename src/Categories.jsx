export default function Categories({ state, onClick }) {
  return (
    <ul>
      {state.categories.map((category) => (
        <li key={category.id}>
          <button type="button" value={category.id} onClick={() => onClick(category.id)}>
            {category.name}
            {category.id === state.currentCategoryId && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
