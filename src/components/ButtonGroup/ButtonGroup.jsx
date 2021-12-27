export default function ButtonGroup({ items, render, keyOfItem }) {
  return (
    <div>
      {items.map((item) => (
        <button type="button" key={item[keyOfItem]}>
          {render(item)}
        </button>
      ))}
    </div>
  );
}
