import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { regions } from '../__fixtures__/regions';

import { setSelectedRegion } from './actions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  it('render regions, when load', () => {
    const { getByRole } = render(
      <RegionsContainer />,
    );

    regions.forEach((region) => {
      expect(getByRole('button', { name: region.name })).toBeInTheDocument();
    });
  });

  it('calls click handler, calls "setSelectedRegion dispatch" with regionName', () => {
    const { getByRole } = render(
      <RegionsContainer />,
    );
    const clickedButton = regions[0];

    fireEvent.click((getByRole('button', { name: clickedButton.name })));

    expect(dispatch).toBeCalledWith(setSelectedRegion(clickedButton.name));
  });
});
