import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Regions from './Regions';

jest.mock('react-redux');

test('Regions', () => {
  const handleRegionClick = jest.fn();

  useSelector.mockImplementation((selector) => selector({ regionClicked: 1 }));
  const regions = [{ id: 1, name: '서울' }, { id: 2, name: '대전' }];

  const { queryByText } = render((<Regions regions={regions} onClick={handleRegionClick} />));

  expect(queryByText('서울(V)')).not.toBeNull();
  expect(queryByText('대전')).not.toBeNull();
});
