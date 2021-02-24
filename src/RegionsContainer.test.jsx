import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import { regions } from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions,
    }));
  });

  it('button들을 보여준다.', () => {
    const { queryByText } = render(<RegionsContainer />);

    regions.forEach((region) => {
      const { name } = region;

      expect(queryByText(name)).not.toBeNull();
    });
  });

  it('버튼을 클릭하면 dispatch를 호출한다.', () => {
    const { queryByText } = render(<RegionsContainer />);

    expect(queryByText(/서울/)).not.toBeNull();

    fireEvent.click(queryByText('서울'));

    expect(dispatch).toBeCalled();
  });
});
