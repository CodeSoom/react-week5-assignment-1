import Region from './Region';

export default function Regions({ regions, selectedRegion, onClick }) {
  if (!regions?.length) {
    return <p>지역 목록이 없어요!</p>;
  }

  return (
    <ul>
      {
        regions.map((region) => (
          <Region
            key={region.id}
            region={region}
            selectedRegion={selectedRegion}
            onClick={onClick}
          />
        ))
      }
    </ul>
  );
}
