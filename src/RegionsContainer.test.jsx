import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from '../__fixtures__/regions';

import { selectRegion } from './modules/actions';

jest.mock('react-redux');

describe('RegionsContainer Component', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    selected: {
      region: '',
    },
  }));

  jest.clearAllMocks();

  it('Page render', () => {
    const { container } = render((
      <RegionsContainer />
    ));

    regions.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  it('Click buttons', () => {
    const { getByText } = render((
      <RegionsContainer />
    ));

    regions.forEach(({ name }) => {
      fireEvent.click(getByText(name));
      expect(dispatch).toBeCalledWith(selectRegion(name));
    });
  });
});
