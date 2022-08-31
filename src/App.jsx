import { regions, categories } from '../__fixtures__/list';

export default function App() {
  return (
    <div>
      {regions.map((region) => (
        <div key={region.id}>
          <button type="button">
            {region.name}
          </button>
        </div>
      ))}

      <p/>
      
      {categories.map((category) => (
        <div key={category.id}>
          <button type="button">
            {category.name}
          </button>
        </div>
      ))}
    </div>
  );
}
