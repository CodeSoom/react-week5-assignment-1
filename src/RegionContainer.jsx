import React from 'react';

import Region from './Region';

export default function RegionContainer() {
  const regions = [
    {
      id: 1,
      text: '서울',
    },
    {
      id: 2,
      text: '대전',
    },
    {
      id: 3,
      text: '대구',
    },
  ];
  return <Region regions={regions} />;
}
