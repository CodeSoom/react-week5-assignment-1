export default function ButtonGroup({
  items, render, keyOfItem, onClick,
}) {
  return (
    <div>
      {items.map((item) => (
        <button type="button" key={item[keyOfItem]} onClick={() => onClick(item)}>
          {render(item)}
        </button>
      ))}
    </div>
  );
}
