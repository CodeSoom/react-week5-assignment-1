import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionContainer from './RegionContainer';

import { regions } from '../fixtures/regions';

jest.mock('react-redux');

describe('RegionContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  it('지역 리스트가 나타난다.', () => {
    const { getByText } = render(<RegionContainer />);

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
  });

  it('지역을 클릭할 수 있다.', () => {
    const { getByText } = render(<RegionContainer />);
    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalled();
  });
});
