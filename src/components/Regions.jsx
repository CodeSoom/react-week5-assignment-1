import Region from './Region';

export default function Regions({ regions, selectRegion, selectedRegion = null }) {
  const isSelected = (region) => {
    if (!selectedRegion) {
      return false;
    }

    return region.id === selectedRegion.id;
  };

  if (!regions.length) {
    return (
      <p>
        지역을 불러오지 못했습니다.
      </p>
    );
  }

  return (
    <ul>
      {
        regions.map((region) => (
          <li key={region.id}>
            <Region
              region={region}
              isSelected={isSelected(region)}
              onClick={selectRegion}
            />
          </li>
        ))
      }
    </ul>
  );
}
