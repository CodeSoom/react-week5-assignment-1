import Region from './Region';

export default function Regions({ regions = [], onClickRegion, selectedRegionId = null }) {
  const isSelected = (region) => region.id === selectedRegionId;

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
              selected={isSelected(region)}
              onClick={onClickRegion}
            />
          </li>
        ))
      }
    </ul>
  );
}
