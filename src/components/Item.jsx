export default function Item({ value, selected, onClick }) {
  const { name } = value;

  return (
    <div>
      <button type="button" onClick={() => onClick(value)}>
        {name}
        {selected && '(V)'}
      </button>
    </div>
  );
}
