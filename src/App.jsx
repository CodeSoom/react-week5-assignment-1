import { categories } from '../fixtures/categories';
import { regions } from '../fixtures/regions';

export default function App() {
  return (
    <div>
      <ul>
        {regions.map((region) => (
          <li key={region}>
            <button type="button">{region}</button>
          </li>
        ))}
      </ul>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button type="button">{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
