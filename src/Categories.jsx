import { useSelector, useDispatch } from 'react-redux';

import { setCategory } from './actions';

export default function Categories({ categories }) {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state);

  const onClick = (e) => {
    dispatch(setCategory({ category: e.target.value }));
  };

  return (
    <ul>
      { categories.map(({ id, name }) => (
        <li key={id}>
          <button type="button" value={name} onClick={onClick}>
            {name}
            {category === name ? '(V)' : ''}
          </button>
        </li>
      )) }
    </ul>
  );
}
