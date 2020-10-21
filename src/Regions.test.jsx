import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

test('Regions', () => {
  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
    { id: 3, name: '대구' },
  ];

  const { getByText } = render((
    <Regions regions={regions} />
  ));

  regions.forEach(({ name }) => {
    expect(getByText(name)).not.toBeNull();
  });
});
