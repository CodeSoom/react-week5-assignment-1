import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRegionAndCategory, loadRegions } from './action';
import Region from './Region';

export default function RegionContainer() {
  // 데이터 페칭하기
  const dispatch = useDispatch();
  const { regions, selectedRegionAndCategory } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  function handleClickButton(item) {
    dispatch(setSelectedRegionAndCategory({
      selectedCategory: selectedRegionAndCategory?.selectedCategory,
      selectedRegion: item,
    }));
  }

  return (
    <Region
      regions={regions}
      selectedRegionAndCategory={selectedRegionAndCategory}
      onClick={handleClickButton}
    />
  );
}
