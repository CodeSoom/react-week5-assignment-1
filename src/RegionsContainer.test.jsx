import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from '../__fixtures__/regions';

test('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const { getByText } = render((
    <RegionsContainer />
  ));

  regions.forEach(({ name }) => {
    expect(getByText(name)).not.toBeNull();
  });
});
