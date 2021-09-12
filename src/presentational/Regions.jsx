import Item from './Item';

export default function Regions({ regions, handleClickRegion, checkedRegion }) {
  return (
    <ul>
      {regions.map((region) => (
        <Item
          key={region.id}
          name="region"
          item={region}
          handleClick={handleClickRegion}
          checkedItem={checkedRegion}
        />
      ))}
    </ul>
  );
}
