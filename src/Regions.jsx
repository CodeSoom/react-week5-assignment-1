export default function Regions({ regions, onClick }) {
  if (regions.length === 0) {
    return (
      <p>지역이 없습니다.</p>
    );
  }

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            id={region.id}
            onClick={onClick}
          >
            {region.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
