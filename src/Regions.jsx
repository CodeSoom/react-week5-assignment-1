import Region from './Region';

export default function Regions({ regions, selectedRegionId, onClick }) {
  const isSelected = (region) => {
    if (isSelected === null) {
      return false;
    }

    return region.id === selectedRegionId;
  };

  if (!regions.length) {
    return <p>카테고리가 없어요!</p>;
  }

  return (
    <ul>
      {
        regions.map((region) => (
          <Region
            key={region.id}
            region={region}
            isSelected={isSelected(region)}
            onClick={onClick}
          />
        ))
      }
    </ul>
  );
}
