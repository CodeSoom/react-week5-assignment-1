export default function ItemButtons({ items = [], onClick }) {
  return (
    <ul>
      {items.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick({ id, name })}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
