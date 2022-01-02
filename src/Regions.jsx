import { useSelector, useDispatch } from 'react-redux';

import { setRegion } from './actions';

export default function Regions({ regions }) {
  const dispatch = useDispatch();
  const { region } = useSelector((state) => state);

  const onClick = (e) => {
    dispatch(setRegion({ region: e.target.value }));
  };

  return (
    <ul>
      {
        regions.map(({ id, name }) => (
          <li key={id}>
            <button type="button" onClick={onClick} value={name}>
              {name}
              {region === name ? '(V)' : ''}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
