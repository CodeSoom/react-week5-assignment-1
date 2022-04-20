import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadRegionList,
} from './action';

import RegionListContainer from './RegionListcontainer';

export default function App() {
  // TODO : 실제 데이터 받아오기
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegionList());
  }, []);
  return (
    <div>
      <RegionListContainer />
      <p>한식</p>
      <p>중식</p>
    </div>
  );
}
