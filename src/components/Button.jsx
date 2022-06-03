export default function Button({ selected, name, onClick }) {
  return (
    <li>
      <button type="button" onClick={onClick}>
        {name}
        {selected && '(V)'}
      </button>
    </li>
  );
}
