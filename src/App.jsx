export default function App() {
  const categories = [
    { id: 1, name: '한식' },
  ];

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
