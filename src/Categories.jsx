export default function Categories({ category, categories, onClickSelectCategory }) {
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
            {id === category && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
