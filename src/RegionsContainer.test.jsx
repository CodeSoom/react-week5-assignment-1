import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  it('should dispatch when mounted', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementationOnce(() => dispatch);

    render(<RegionsContainer />);
    expect(dispatch).toHaveBeenCalledWith({ type: 'GET_REGIONS' });
  });
});
