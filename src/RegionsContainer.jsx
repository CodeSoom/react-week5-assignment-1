import React from 'react';

import Regions from './Regions';

export default function RegionsContainer() {
  // JSON데이터 불러와서 regions에 반영하기
  return (<Regions regions={regions} />);
}
