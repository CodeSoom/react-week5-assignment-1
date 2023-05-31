import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegion } from './action';

export default function RegionContainer() {
  // 데이터 페칭하기
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRegion());
  }, []);
  const { region } = useSelector((state) => state);

  function handleClickButton(item) {
    console.log(item);
  }

  return (
    <div>
      {region?.regionData.map((item) => (
        <button
          type="button"
          key={item.id}
          onClick={() => handleClickButton(item)}
        >
          {item.name}
        </button>
      ))}
    </div>

  );
}
