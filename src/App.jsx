import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import OptionList from './OptionList';
import { loadCategories, loadRegions } from './redux_module/asyncActions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  });

  const categories = ['한식', '중식', '일식', '양식', '분식'];
  const regions = ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'];

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
