import RegionsContainer from './RegionsContainer';
import Categories from './Categories';

export default function App() {
  const categories = [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
    { id: 3, name: '일식' },
    { id: 4, name: '양식' },
    { id: 5, name: '분식' },
  ];

  return (
    <>
      <h1>레스토랑</h1>
      <h2>지역</h2>
      <RegionsContainer />
      <h2>카테고리</h2>
      <Categories categories={categories} />
      <h2>조회된 레스토랑</h2>
      <ul>
        <li>조회된 레스토랑이 없습니다.</li>
      </ul>
    </>
  );
}
