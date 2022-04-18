import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const addresses = [
    { id: 1, name: '서울' },
  ];
  return (
    <div>
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>
            {address.name}
          </li>
        ))}
      </ul>
      <CategoriesContainer />
    </div>
  );
}
