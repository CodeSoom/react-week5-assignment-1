import Item from './Item';

export default function Regions({ regions, selectedRegion, onClick }) {
  if (!regions.length) {
    return null;
  }

  return (
    <>
      {regions.map((region) => (
        <Item
          key={region.id}
          value={region}
          selected={region.name === selectedRegion?.name}
          onClick={onClick}
        />
      ))}
    </>
  );
}
