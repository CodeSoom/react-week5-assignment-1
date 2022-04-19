export default function Regions() {
  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
    { id: 3, name: '대구' },
    { id: 4, name: '부산' },
    { id: 5, name: '광주' },
    { id: 6, name: '강원도' },
    { id: 7, name: '인천' },
    { id: 8, name: '제주' },
    { id: 9, name: '전주' },
    { id: 10, name: '순천' },
    { id: 11, name: '독도' },
  ];

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
