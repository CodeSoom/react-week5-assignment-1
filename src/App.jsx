import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OptionList from './OptionList';
import { setCategories, setRegions } from './redux_module/groupsSlice';

export default function App() {
  const categories = useSelector((state) => state.groups.categories);
  const regions = useSelector((state) => state.groups.regions);

  useEffect(() => {
    const dispatch = useDispatch();
    dispatch(setCategories(categories));
    dispatch(setRegions(regions));
  });

  return (
    <>
      <OptionList
        options={categories}
        optionType="category"
      />

      <OptionList
        options={regions}
        optionType="region"
      />
    </>
  );
}
