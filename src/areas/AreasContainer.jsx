import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAreaName } from '../redux/reducer';
import Areas from './Areas';

export default function AreasContainer() {
  const dispatch = useDispatch();
  const { areas, areaName } = useSelector((state) => ({
    areas: state.areas,
    areaName: state.areaName,
  }));

  const handleClick = (name) => {
    dispatch(setAreaName(name));
  };

  return (
    <div>
      <h1>지역</h1>
      <Areas areas={areas} handleClick={handleClick} areaName={areaName} />
    </div>
  );
}
