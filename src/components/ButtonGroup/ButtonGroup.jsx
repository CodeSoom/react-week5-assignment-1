export default function ButtonGroup({
  items, render, key, onClick,
}) {
  return (
    <div>
      {items.map((item) => (
        <button type="button" key={() => key(item)} onClick={() => onClick(item)}>
          {render(item)}
        </button>
      ))}
    </div>
  );
}
