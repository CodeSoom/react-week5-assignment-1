import { useSelector } from 'react-redux';

export default function App() {
  const { categories, regions } = useSelector((state) => ({
    categories: state.categories,
    regions: state.regions,
  }));

  return (
    <>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <ul>
        {regions.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
}
