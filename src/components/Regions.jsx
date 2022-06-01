import Item from './Item';

export default function Regions({ regions, changeRegionName, onClick }) {
  return (
    <>
      {regions.map((region) => (
        <Item
          key={region.id}
          value={region}
          selected={region.name === changeRegionName?.name}
          onClick={onClick}
        />
      ))}
    </>
  );
}
