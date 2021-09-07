import Item from './Item';

export default function RegionList({ regions, onClick, selectedRegion }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <Item
          key={id}
          onClick={() => onClick({
            field: 'selectedRegion',
            value: { id, name },
          })}
        >
          {id === selectedRegion.id ? `${name}(V)` : name}
        </Item>
      ))}
    </ul>
  );
}
