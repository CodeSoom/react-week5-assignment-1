export default function Item({ name, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(name)}
    >
      {name}
      {' '}
      {selected && 'V'}
    </button>
  );
}
