import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import { regions } from '../fixtures';

import { setClicked } from './actions';

import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  given('clicked', () => ({
    region: '',
  }));

  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions,
      clicked: given.clicked,
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
    given('clicked', () => ({
      region: '서울',
    }));

    const { queryByText } = render(<RegionsContainer />);

    expect(queryByText('서울(V)')).not.toBeNull();
  });

  it('appends a new region into Clicked upon clicking region', () => {
    const { queryByText } = render(<RegionsContainer />);

    fireEvent.click(queryByText('서울'));

    expect(dispatch).toBeCalledWith(setClicked({ region: '서울' }));
  });
});
