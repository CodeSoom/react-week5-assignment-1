export default function Categories({ state, onClick }) {
  return (
    <ul>
      {state.categories.map((category) => (
        <li key={category.id}>
          <button type="button" name="currentCategoryId" value={category.id} onClick={onClick}>
            {category.name}
            {category.id === state.currentCategoryId && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
