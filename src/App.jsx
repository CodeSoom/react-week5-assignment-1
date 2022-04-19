import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Region from './Region';

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
    // TODO: load
  }, []);
  return (
    <div>
      <Region regionList={regionList} />
      <p>한식</p>
      <p>중식</p>
    </div>
  );
}
