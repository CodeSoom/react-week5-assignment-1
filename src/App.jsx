import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoryListContainer from './components/CategoryListContainer';

import OptionList from './components/OptionList';
import { loadCategories, loadRegions } from './redux_module/asyncActions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  });

  const regions = ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'];

  return (
    <>
      <CategoryListContainer />

      <OptionList
        options={regions}
        optionType="region"
      />
    </>
  );
}
