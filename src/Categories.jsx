export default function Categories({ categoryId, categories, onClickSelectCategory }) {
  return (
    <ul>
      {categories.map(({ name, id }) => (
        <li key={id}>
          <button
            onClick={() => {
              onClickSelectCategory(id);
            }}
            name={name}
            type="button"
            key={id}
          >
            {name}
            {id === categoryId && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
