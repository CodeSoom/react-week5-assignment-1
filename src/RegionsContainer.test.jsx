import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders regions', () => {
    const { queryByText } = render(<RegionsContainer />);
    expect(queryByText('서울')).not.toBeNull();
  });

  it('listens region button click event', () => {
    const { getByText } = render(<RegionsContainer />);

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith({
      type: 'selectRegion',
      payload: {
        region: { id: 1, name: '서울' },
      },
    });
  });
});
