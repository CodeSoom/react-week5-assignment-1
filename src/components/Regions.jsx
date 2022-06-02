import Item from './Item';

export default function Regions({ regions, onClick }) {
  return (
    <ul>
      {regions.map((region) => (
        <Item key={region.id} item={region} onClick={onClick} />
      ))}
    </ul>
  );
}
