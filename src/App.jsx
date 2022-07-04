export default function App() {
  const regions = ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'];
  const categories = ['한식', '중식', '일식', '양식', '분식'];

  const handleClick = () => {
    // Todo: handleClick 이벤트 작성
  };

  return (
    <>
      <section>
        {regions.map((region) => (
          <button type="button" key={region} onClick={handleClick}>
            {region}
          </button>
        ))}
      </section>
      <section>
        {categories.map((category) => (
          <button type="button" key={category} onClick={handleClick}>
            {category}
          </button>
        ))}
      </section>
      <section>
        <p>지역과 카테고리를 입력해주세요!</p>
      </section>
    </>
  );
}
