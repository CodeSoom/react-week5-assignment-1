export default function App() {
  const categories = ['한식', '중식', '일식', '양식', '분식'];
  return (
    <ul>
      {categories.map((category, i) => (
        <li key={i}>
          {category}
        </li>
      ))}
    </ul>
  );
}
