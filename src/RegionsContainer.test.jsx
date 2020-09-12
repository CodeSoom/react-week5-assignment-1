import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

const regions = [
  { id: 1, name: '서울' },
];
useSelector.mockImplementation((selector) => selector({ regions }));

describe('RegionsContainer', () => {
  it('contains regional names', () => {
    const { queryByText } = render(
      <RegionsContainer />,
    );

    expect(queryByText(/서울/)).not.toBeNull();
  });

  it('selects a region and update display', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = render(
      <RegionsContainer />,
    );

    fireEvent.click(getByText(/서울/));

    expect(dispatch).toBeCalledWith({
      type: 'selectRegion',
      payload: { regionId: 1 },
    });
  });
});
