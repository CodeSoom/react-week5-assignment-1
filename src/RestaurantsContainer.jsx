import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantsThunk } from './actions';

function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { regionName, categoryId } = useSelector((state) => state.watching);

  useEffect(() => {
    if (regionName && categoryId) {
      dispatch(getRestaurantsThunk());
    }
  }, [regionName && categoryId]);
  return (
    <div>
      <ul>
        {[
          {
            id: 1, categoryId: 1, name: '양천주가', address: '서울 강남구 123456', information: '양천주가 in 서울 강남구 123456',
          },
          {
            id: 6, categoryId: 1, name: '한국식 초밥', address: '서울 강남구', information: '한국식 초밥 in 서울 강남구',
          },
          {
            id: 14, categoryId: 1, name: '김초밥', address: '서울시 강남구 역삼동', information: '김초밥 in 서울시 강남구 역삼동',
          },
        ].map((data) => <li key={data.id}>{data.name}</li>)}
      </ul>

    </div>
  );
}
/*
TODO

1 > 지역 선택하고 종류 선택하면 dispatch 된다.

2 > 서버로부터 받아왔으면 출력한다.

*/
export default RestaurantsContainer;
