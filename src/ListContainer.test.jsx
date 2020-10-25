import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

import { regions, categories, restaurants } from '../fixtures/fixture';

jest.mock('react-redux');

describe('ListContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('selectedButtons에 비어 있으면 dispatch가 호출되지 않습니다.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
      selectedButtons: {
        region: '',
        category: '',
      },
    }));

    render(<ListContainer />);

    expect(dispatch).not.toBeCalled();
  });

  it('selectedButtons의 region과 category가 모두 있으면 dispatch가 호출됩니다.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
      selectedButtons: {
        region: '서울',
        category: '한식',
      },
    }));

    render(<ListContainer />);

    expect(dispatch).toBeCalled();
  });
});
