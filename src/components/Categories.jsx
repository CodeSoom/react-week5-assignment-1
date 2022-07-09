export default function Categories({ categories, selectedCategory, onClick }) {
  return (
    <ul>
      {
        categories.map(({ id, name }) => (
          <li key={id}>
            <button type="button" onClick={() => onClick(id)}>
              {name}
              {selectedCategory === id && '(V)'}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
