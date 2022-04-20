import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Region from './Region';

import { setRegionList } from './action';

function loadRegionList({ dispatch }) {
  const regionList = [];
  dispatch(setRegionList(regionList));
}

export default function App() {
  const regionList = [
    {
      id: 1,
      name: '서울',
    },
    {
      id: 2,
      name: '대전',
    },
  ];

  // TODO : 실제 데이터 받아오기
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: loadcategories
    loadRegionList({ dispatch });
  }, []);
  return (
    <div>
      <RegionListContainer />
      <Region regionList={regionList} />
      <p>한식</p>
      <p>중식</p>
    </div>
  );
}
