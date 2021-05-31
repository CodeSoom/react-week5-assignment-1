import { useDispatch, useSelector } from 'react-redux';

import {
  updateSelectedCategory,
  updateSelectedRegion,
} from './selectedSlice';

export default function OptionList({ options, mode }) {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state[mode]);

  return (
    <ul>
      {options.map((option) => {
        const name = (selected === option) ? `${option}(V)` : option;
        const handleClick = (mode === 'region')
          ? () => dispatch(updateSelectedRegion(name))
          : () => dispatch(updateSelectedCategory(name));

        return (
          <li key={option}>
            <button type="button" onClick={handleClick}>
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
