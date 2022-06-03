export default function Item({ value, selected, onClick }) {
  const { name } = value;

  function handleClick() {
    return onClick(value);
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {name}
        {selected && '(V)'}
      </button>
    </div>
  );
}
