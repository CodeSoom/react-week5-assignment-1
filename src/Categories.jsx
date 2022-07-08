export default function Categories({ category, categories, onClickSelectCategory }) {
  return (
    <ul>
      {categories.map(({ name, id }) => (
        <li key={id}>
          <button onClick={onClickSelectCategory} name={name} type="button" key={id}>
            {name}
            {name === category && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
