export default function SelectorButton({ selectedName, name, onClick }) {
  return (
    <div>
      <button
        type="button"
        name={name}
        onClick={(e) => onClick(e.target.name)}
      >
        {name}
        {(selectedName === name) && '(V)'}
      </button>
    </div>
  );
}
