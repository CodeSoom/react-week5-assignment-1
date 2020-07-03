import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RegionContainer from './RegionContainer';

jest.mock('react-redux');

describe('RegionContainer', () => {
  it('should display regions', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 101, name: '서울' },
      ],
    }));

    const { getByText } = render((
      <RegionContainer />
    ));

    expect(getByText('서울')).not.toBeNull();
  });

  it('should display selected region', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = render((
      <RegionContainer />
    ));

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith({
      type: 'selectRegion',
      payload: {
        selectedRegion: '서울',
      },
    });
  });
});
