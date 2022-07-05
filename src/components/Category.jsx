export default function Category({ categories }) {
  return (
    <ul>
      {
        categories.map((category) => (
          <li key={category.id}>
            <button type="button">
              {category.name}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
