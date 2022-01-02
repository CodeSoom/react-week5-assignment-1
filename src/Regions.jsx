import { useDispatch } from 'react-redux';
import { setRegion } from './actions';

export default function Regions({ regions }) {
  const dispatch = useDispatch();

  const onClick = (e) => {
    const region = e.target.value;

    dispatch(setRegion({ region }));
  };

  return (
    <ul>
      {
        regions.map(({ id, name }) => (
          <li key={id}>
            <button type="button" onClick={onClick} value={name}>{name}</button>
          </li>
        ))
      }
    </ul>
  );
}
