export default function RegionButton({ selectedRegionName, name, onClick }) {
  return (
    <div>
      <button
        type="button"
        name={name}
        onClick={(e) => onClick(e.target.name)}
      >
        {name}
        {(selectedRegionName === name) && '(V)'}
      </button>
    </div>
  );
}
