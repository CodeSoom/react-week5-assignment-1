import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from './fixtures/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  it('show categories and regions', () => {
    const { getByText } = render(<RegionsContainer />);

    expect(getByText('서울')).not.toBeNull();
  });

  it('click category', () => {
    const { getByText } = render(<RegionsContainer />);

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith(
      {
        type: 'checkRegions',
        payload: { id: regions[0].id, isChecked: regions[0].isChecked },
      },
    );
  });
});
