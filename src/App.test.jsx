import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
    restaurants: [
      {
        id: 6,
        categoryId: 1,
        name: '한국식 초밥',
        address: '서울 강남구',
        information: '한국식 초밥 in 서울 강남구',
      },
    ],
  }));

  it('render', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('서울')).not.toBeNull();
  });
});
