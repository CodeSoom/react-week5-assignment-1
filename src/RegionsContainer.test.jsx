import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../__fixtures__/regions';

import RegionsContainer from './RegionsContainer';

import { selectRegion } from './actions';

jest.mock('react-redux');

test('RegionsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const { container, getByText } = render((
    <RegionsContainer />
  ));

  regions.forEach(({ id, name }) => {
    expect(container).toHaveTextContent(name);

    fireEvent.click(getByText(name));

    expect(dispatch).toBeCalledWith(selectRegion({ id, name }));
  });
});
