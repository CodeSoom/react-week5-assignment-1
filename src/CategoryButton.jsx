export default function CategoryButton({ selectedCategoryName, name, onClick }) {
  return (
    <div>
      <button
        type="button"
        name={name}
        onClick={(e) => onClick(e.target.name)}
      >
        {name}
        {(selectedCategoryName === name) && '(V)'}
      </button>
    </div>
  );
}
