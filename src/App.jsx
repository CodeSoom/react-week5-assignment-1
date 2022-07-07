import regions from '../fixtures/regions';

const App = () => (
  <ul>
    {regions.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);

export default App;
