import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../__fixtures__/regions';

import RegionsContainer from './RegionsContainer';

import { selectRegion } from './actions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions,
    }));
  });

  function renderRegionsContainer() {
    return render((
      <RegionsContainer />
    ));
  }

  it('renders Regions with regions', () => {
    const { container } = renderRegionsContainer();

    regions.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  describe('click each region button', () => {
    it('dispatches selectRegion action', () => {
      const { getByText } = renderRegionsContainer();

      regions.forEach(({ id, name }) => {
        fireEvent.click(getByText(name));

        expect(dispatch).toBeCalledWith(selectRegion({ id, name }));
      });
    });
  });
});
