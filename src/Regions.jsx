import Item from './Item';

export default function Regions({ regions, selectedRegion, onClick }) {
  if (!regions.length) {
    return null;
  }

  return (
    <>
      {regions.map(({ id, name }) => (
        <Item
          key={id}
          name={name}
          selected={name === selectedRegion}
          onClick={onClick}
        />
      ))}
    </>
  );
}
