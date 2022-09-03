export default function Categories({ categories }) {
  return (
    <ul>
      {categories.map((cattegory) => (
        <li key={cattegory.id}>
          <button type="button">
            {cattegory.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
