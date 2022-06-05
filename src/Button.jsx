export default function Button({ name, onClick, selected }) {
  return (
    <button type="button" onClick={onClick}>
      {name}
      {selected ? '(V)' : ''}
    </button>
  );
}
