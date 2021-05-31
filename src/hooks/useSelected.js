import { useDispatch, useSelector } from 'react-redux';

import {
  updateSelectedCategory,
  updateSelectedRegion,
} from '../redux_module/selectedSlice';

export default function useSelected(mode) {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state[mode]);

  const selectedSetter = {
    region: (name) => dispatch(updateSelectedRegion(name)),
    category: (name) => dispatch(updateSelectedCategory(name)),
  };

  return {
    selected,
    setSelected: selectedSetter[mode],
  };
}
