export default function ItemButtons({ items = [] }) {
  return (
    <ul>
      {items.map(({ id, name }) => (
        <li key={id}>
          <button type="button">{name}</button>
        </li>
      ))}
    </ul>
  );
}
