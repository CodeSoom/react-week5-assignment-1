import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionButtonsContainer from './RegionButtonsContainer';

jest.mock('react-redux');

const dispatch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    currentRegion: '',
  }));
});

describe('RegionButtonsContainer', () => {
  it('renders restaurant region buttons', () => {
    const { getByText } = render(<RegionButtonsContainer />);

    expect(getByText('서울')).not.toBeNull();
  });

  it('marks the clicked button', () => {
    const { getByText } = render(<RegionButtonsContainer />);

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith({
      type: 'setRegion',
      payload: {
        currentRegion: '서울',
      },
    });
  });
});
