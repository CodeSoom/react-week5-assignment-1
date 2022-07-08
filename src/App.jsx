import categories from '../fixtures/categories';

import RegionsContainer from './RegionsContainer';

const App = () => (
  <>
    <RegionsContainer />
    <ol>
      {categories.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ol>
  </>
);

export default App;
