import Regions from './Regions';

export default function App() {
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

  return (
    <>
      <h1>레스토랑</h1>
      <Regions regions={regions} />

      <h2>카테고리</h2>
      <ul>
        <li>
          <button type="button">한식</button>
        </li>
        <li>
          <button type="button">중식</button>
        </li>
        <li>
          <button type="button">일식</button>
        </li>
        <li>
          <button type="button">양식</button>
        </li>
        <li>
          <button type="button">분식</button>
        </li>
      </ul>

      <h2>조회된 레스토랑</h2>
      <ul>
        <li>조회된 레스토랑이 없습니다.</li>
      </ul>
    </>
  );
}
