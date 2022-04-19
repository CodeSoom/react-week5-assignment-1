export default function Regions({ regions }) {
  if (regions.length === 0) {
    return (
      <p>지역이 없습니다.</p>
    );
  }

  return (
    <>
      <h2>지역</h2>
      <ul>
        {
          regions.map((region) => (
            <li key={region.id}>
              <button type="button">{region.name}</button>
            </li>
          ))
        }
      </ul>
    </>
  );
}
