export default function Button({ item: { id, name }, selected }) {
  return (
    <li>
      <button type="button">
        {name}
        {name === selected ? '(V)' : ''}
      </button>
    </li>
  );
}
