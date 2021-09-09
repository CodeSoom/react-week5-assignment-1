import Item from './Item';

export default function Regions({ regions, handleClickRegion, checkedElement }) {
  return (
    <ul>
      {regions.map((region) => (
        <Item
          key={region.id}
          name="region"
          data={region}
          handleClick={handleClickRegion}
          checkedElement={checkedElement}
        />
      ))}
    </ul>
  );
}
