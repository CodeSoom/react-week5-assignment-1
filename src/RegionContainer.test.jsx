import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import RegionContainer from './RegionContainer';

jest.mock('react-redux');

test('RegionContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const region = {
    id: 1,
    name: '부산',
  };

  const { getByText } = render((
    <RegionContainer region={region} />
  ));

  expect(getByText('부산')).not.toBeNull();

  fireEvent.click(getByText('부산'));
  expect(dispatch).toBeCalledWith({
    type: 'setSelectedRegion',
    payload: {
      id: 1,
    },
  });
});
