import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { regions } from '../__fixture__/data'; // TODO : API 통신 구현 완료 후 삭제 예정

import { setInitRegions } from './action';

export function loadRegions({ dispatch }) {
  dispatch(setInitRegions(regions));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(setInitRegions(regions));

    loadRegions({ dispatch });
  }, []);

  return (
    <div>
      <RegionsContainer />
    </div>
  );
}
