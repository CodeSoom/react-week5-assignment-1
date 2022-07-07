import Region from './Region';

export default function Regions({ regions = [] }) {
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
            <Region region={region} />
          </li>
        ))
      }
    </ul>
  );
}
