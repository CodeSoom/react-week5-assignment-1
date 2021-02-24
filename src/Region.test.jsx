import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Region from './Region';

test('Region', () => {
  const region = { id: 1, name: '서울' };
  const handleRegionClick = jest.fn();

  const { queryByText } = render((<Region region={region} onClick={handleRegionClick} />));

  expect(queryByText('서울')).not.toBeNull();

  fireEvent.click(queryByText('서울'));

  expect(handleRegionClick).toBeCalledWith(1);
  expect(queryByText('서울(V)')).not.toBeNull();
});
