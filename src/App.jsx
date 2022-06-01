const restaurants = {
  regions: ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'],
};

export default function App() {
  return (
    <div>
      <ul>
        {restaurants.regions.map((region) => (
          <li key={region}>
            <button type="button">{region}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
