export default function Regions({ regions }) {
  if (!regions || regions.length === 0) {
    return <>지역이 없어요!</>;
  }

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button type="button">
            {region.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
