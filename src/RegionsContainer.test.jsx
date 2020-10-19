import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import regions from '../__fixtures__/regions';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

test('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const { container } = render((
    <RegionsContainer />
  ));

  regions.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
