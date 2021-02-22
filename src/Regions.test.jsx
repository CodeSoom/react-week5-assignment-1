import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

test('Regions', () => {
  const regions = [{ id: 1, name: '서울' }, { id: 2, name: '대전' }];

  const { queryByText } = render((<Regions regions={regions} />));

  expect(queryByText('서울')).not.toBeNull();
  expect(queryByText('대전')).not.toBeNull();
});
