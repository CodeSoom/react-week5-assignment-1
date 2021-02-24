import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { regionName, categoryId } = useSelector((state) => state.watching);

  useEffect(() => {
    // if (regionName && categoryId) {
    //   dispatch();
    // }
  }, [regionName && categoryId]);
  return (
    <div className="restaurants-container">restaurants-container</div>
  );
}
/*
TODO

1 > 지역 선택하고 종류 선택하면 dispatch 된다.

2 > 서버로부터 받아왔으면 출력한다.

*/
export default RestaurantsContainer;
