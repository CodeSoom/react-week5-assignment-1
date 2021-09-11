import { useState } from 'react';
import { regions, categories } from '../fixtures';

export default function App() {
  console.log(regions);
  const [state, setState] = useState({
    region: '',
    category: ''
  })

  const { region, category } = state;

  const handleClick = (type, name) => () => {
    setState({
      ...state,
      [type]: name
    })
  }

  return (
    <div>
      <ul>
        {regions.map(({ name }) => (
          <li key={name} onClick={handleClick('region', name)}>
            <button type="button">
              {`${name}${region === name ? '(V)' : ''}`}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {categories.map(({ name }) => (
          <li key={name} onClick={handleClick('category', name)}>
            <button type="button">
              {`${name}${category === name ? '(V)' : ''}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
