export default function Categories({ categories, onClick }) {
  return (
    <ul>
      {categories.map((location) => (
        <li key={location.id}>
          <button
            type="button"
            onClick={onClick}
          >
            {location.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
