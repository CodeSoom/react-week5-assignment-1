import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedData, fetchRegion } from './action';

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
    <div>
      {regionData?.map((item) => (
        <button
          type="button"
          key={item.id}
          onClick={() => handleClickButton(item)}
        >
          {selectedData?.selectedRegion?.name === item.name ? `${item.name} v` : item.name}
        </button>
      ))}
    </div>

  );
}
