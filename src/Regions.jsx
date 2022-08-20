import { useDispatch } from 'react-redux';

import { setCurrentRegion } from './action';

export default function Regions({ regions, currentContent }) {
  const dispatch = useDispatch();
  const handleGetClickRegion = (event) => dispatch(setCurrentRegion(event.target.innerText));

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button type="button" id={region.id} onClick={handleGetClickRegion}>
            {region.name}
            {region.name === currentContent ? '(V)' : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
