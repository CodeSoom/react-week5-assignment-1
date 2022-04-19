import Regions from './Regions';

export default function App() {
  return (
    <>
      <h1>레스토랑</h1>
      <Regions />

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
