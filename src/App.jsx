import { categories } from '../fixtures/categories';
import { regions } from '../fixtures/regions';

export default function App() {
  return (
    <div>
      <ul>
        {regions.map(({ name, id }) => (
          <li key={id}>
            <button type="button">{name}</button>
          </li>
        ))}
      </ul>
      <ul>
        {categories.map(({ name, id }) => (
          <li key={id}>
            <button type="button">{name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
