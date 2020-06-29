import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import { regions } from '../fixtures/regions';

jest.mock('react-redux');
jest.mock('./services/api.js');

describe('App', () => {
  it('지역 리스트가 나타난다.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        regions,
      }),
    );
    const { getByText } = render(<App />);

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
  });

  it('카테고리 리스트가 나타난다.', () => {
    const { getByText } = render(<App />);

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
    expect(getByText('일식')).not.toBeNull();
  });
});
