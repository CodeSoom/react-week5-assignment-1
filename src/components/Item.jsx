export default function Item({ value, selected, onClick }) {
  const { name } = value;

  return (
    <>
      <button type="button" onClick={() => onClick(value)}>
        {name}
        {selected && '(V)'}
      </button>
      <br />
    </>
  );
}
