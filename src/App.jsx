import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadCategories } from './async-actions';

import RegionsContainer from './RegionsContainer';

const App = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(loadCategories());
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
