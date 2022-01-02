import { useDispatch } from 'react-redux';

import { setCategory } from './actions';

export default function Categories({ categories }) {
  const dispatch = useDispatch();

  const onClick = (e) => {
    const category = e.target.value;

    dispatch(setCategory({ category }));
  };

  return (
    <ul>
      { categories.map(({ id, name }) => (
        <li key={id}>
          <button type="button" value={name} onClick={onClick}>
            {name}
          </button>
        </li>
      )) }
    </ul>
  );
}
