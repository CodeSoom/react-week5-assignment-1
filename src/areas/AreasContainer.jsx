import React from 'react';
import { useSelector } from 'react-redux';

export default function AreasContainer() {
  // const { areas } = useSelector((state) => ({
  //   areas: state.areas,
  // }));

  return (
    <div>
      <h1>지역</h1>
      <ul>
        <li>서울</li>
      </ul>
    </div>
  );
}
