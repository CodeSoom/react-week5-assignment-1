import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionContainer from './RegionContainer';

jest.mock('react-redux');

describe('RegionContainer', () => {
  it('renders regions', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
    }));

    const { container, getByText } = render(<RegionContainer />);

    expect(container).toHaveTextContent('서울');

    fireEvent.click(getByText('서울'));
    expect(dispatch).toBeCalledWith({
      type: 'setSelectedRegion',
      payload: {
        name: '서울',
      },
    });
  });
});
