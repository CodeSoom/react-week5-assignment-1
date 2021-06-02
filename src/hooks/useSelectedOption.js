import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  selectRegion,
} from '../redux_module/selectedSlice';

export default function useSelectedOption(optionType) {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selected[optionType]);

  const selectedSetter = {
    region: (name) => dispatch(selectRegion(name)),
    category: (name) => dispatch(selectCategory(name)),
  };

  return {
    selected,
    setSelected: selectedSetter[optionType],
  };
}
