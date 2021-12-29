export default function Item({ value: { name } }) {
  return (
    <button type="button">
      {name}
    </button>
  );
}
