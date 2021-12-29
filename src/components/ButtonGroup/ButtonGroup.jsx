export default function ButtonGroup({
  items, render, keyOfItem, onClick,
}) {
  return (
    <div>
      {items.map((item) => (
        <button type="button" key={keyOfItem(item)} onClick={() => onClick(item)}>
          {render(item)}
        </button>
      ))}
    </div>
  );
}
