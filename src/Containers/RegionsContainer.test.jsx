import React from 'react';
import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

test('[RegionsContainer]', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories: [
      {
        id: 1,
        name: '한식',
      },
    ],
    searchQuery: {
      regionName: '',
      categoryId: 0,
    },
  }));

  const { getByTest } = render((
    <RegionsContainer />
  ));
});
