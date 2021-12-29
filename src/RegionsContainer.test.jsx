import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { regions } from '../__fixtures__/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  it('render regions, when load', () => {
    const { getByRole } = render(
      <RegionsContainer />,
    );

    regions.forEach((category) => {
      getByRole('button', { name: category.name });
    });
  });
});
