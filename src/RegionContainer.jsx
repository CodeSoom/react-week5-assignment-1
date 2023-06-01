import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedData, fetchRegion } from './action';
import Region from './Region';

export default function RegionContainer() {
  // 데이터 페칭하기
  const dispatch = useDispatch();
  const { regionData, selectedData } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchRegion());
  }, []);

  function handleClickButton(item) {
    dispatch(updateSelectedData({ selectedRegion: item }));
  }

  return (
    <Region
      regionData={regionData}
      selectedData={selectedData}
      onClick={handleClickButton}
    />
  );
}
