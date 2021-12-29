import Item from './Item';

export default function Regions({ regions }) {
  if (!regions.length) {
    return null;
  }

  return (
    <>
      {regions.map((region) => (
        <Item
          key={region.id}
          value={region}
        />
      ))}
    </>
  );
}
