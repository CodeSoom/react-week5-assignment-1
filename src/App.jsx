import { useEffect, useState } from 'react';

import { fetchCategories } from './services/api';

import RegionsContainer from './RegionsContainer';

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      setCategories(await fetchCategories());
    })();
  }, []);

  return (
    <>
      <RegionsContainer />
      <ol>
        {categories.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ol>
    </>
  );
};

export default App;
