export default function Regions({
  regions,
  onClick,
  selectedRegionName,
}) {
  return (
    <div>
      {
        regions.map((region) => (
          <button
            type="button"
            key={region.id}
            onClick={() => onClick(region.name)}
          >
            {region.name}
            {
              selectedRegionName === region.name && '✅'
            }
          </button>
        ))
      }
    </div>
  );
}
