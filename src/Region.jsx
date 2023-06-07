export default function Region({ regions, selectedRegionAndCategory, onClick }) {
  return (
    <div>
      {regions?.map((item) => (
        <button
          type="button"
          key={item.id}
          onClick={() => onClick(item)}
        >
          {selectedRegionAndCategory?.selectedRegion?.name === item.name ? `${item.name} v` : item.name}
        </button>
      ))}
    </div>
  );
}
