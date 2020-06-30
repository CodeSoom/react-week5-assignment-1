import React from 'react';

import { useSelector } from 'react-redux';

export default function RegionContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));
  return (
    <ul>
      <li>서울</li>
    </ul>
  );
}
