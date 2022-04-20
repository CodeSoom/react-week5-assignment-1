import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setRegionList } from './action';

import { fetchRegionList } from './services/api';

import RegionListContainer from './RegionListcontainer';

async function loadRegionList({ dispatch }) {
  const regionList = await fetchRegionList();
  dispatch(setRegionList(regionList));
}

export default function App() {
  // TODO : 실제 데이터 받아오기
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: loadcategories
    loadRegionList({ dispatch });
  }, []);
  return (
    <div>
      <RegionListContainer />
      <p>한식</p>
      <p>중식</p>
    </div>
  );
}
