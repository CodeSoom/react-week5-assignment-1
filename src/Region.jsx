export default function Region({ regionData, selectedData, onClick }) {
  return (
    <div>
      {regionData?.map((item) => (
        <button
          type="button"
          key={item.id}
          onClick={() => onClick(item)}
        >
          {selectedData?.selectedRegion?.name === item.name ? `${item.name} v` : item.name}
        </button>
      ))}
    </div>
  );
}
