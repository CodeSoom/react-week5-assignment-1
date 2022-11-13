export default function Region({ region, selectedRegion, onClick }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onClick(region.name)}
      >
        {region.name}
        {selectedRegion === region.name && '(V)'}

      </button>
    </li>
  );
}
