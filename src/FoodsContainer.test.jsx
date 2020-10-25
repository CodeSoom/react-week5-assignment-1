import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import FoodsContainer from './FoodsContainer';

jest.mock('react-redux');

test('FoodsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    foods:[
      {
        id: 1, name:'한식',
      },
    ],
  }));
  const { getByText } = render((
    <FoodsContainer />
  ));

  expect(getByText('한식')).not.toBeNull();
});