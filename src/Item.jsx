export default function Item({ value: { id, name } }) {
  return (
    <button key={id} type="button">
      {name}
    </button>
  );
}
