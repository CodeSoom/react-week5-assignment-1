import { useDispatch, useSelector } from 'react-redux';

import {
  updateSelectedCategory,
  updateSelectedRegion,
} from '../selectedSlice';

export default function useSelected(mode) {
  const selected = useSelector((state) => state[mode]);
  const dispatch = useDispatch();

  const selectedSetter = {
    region: (name) => dispatch(updateSelectedRegion(name)),
    category: (name) => dispatch(updateSelectedCategory(name)),
  };

  return { selected, setSelected: selectedSetter[mode] };
}
