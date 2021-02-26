import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import { regions } from '../fixtures';

import { setSelected } from './actions';

import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  given('selected', () => ({
    region: '',
  }));

  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      regions,
      selected: given.selected,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders region buttons', () => {
    const { queryByText } = render(<RegionsContainer />);

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('대전')).not.toBeNull();
    expect(queryByText('대구')).not.toBeNull();
  });

  it('renders (V) along the selected button', () => {
    given('selected', () => ({
      region: {
        id: 1,
        name: '서울',
      },
    }));

    const { queryByText } = render(<RegionsContainer />);

    expect(queryByText('서울(V)')).not.toBeNull();
  });

  it('appends a new region into selected region upon clicking region', () => {
    const { queryByText } = render(<RegionsContainer />);

    fireEvent.click(queryByText('서울'));

    expect(dispatch).toBeCalledWith(setSelected({
      region: {
        id: '1',
        name: '서울',
      },
    }));
  });
});
