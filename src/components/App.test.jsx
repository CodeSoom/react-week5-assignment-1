import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('../services/api');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [{
      id: 1,
      name: '서울',
    }, {
      id: 2,
      name: '대전',
    }],
    categories: [{
      id: 1,
      name: '한식',
    }, {
      id: 2,
      name: '일식',
    }],
    restaurants: [{
      id: 1,
      name: '두향',
    },
    {
      id: 2,
      name: '맥도날드',
    },
    ],
  }));

  function renderApp() {
    return render(<App />);
  }

  it('fetchs regions, categories, restaurants', () => {
    renderApp();

    expect(dispatch).toBeCalledTimes(3);
  });

  it('renders regions', () => {
    const { queryByText } = renderApp();

    expect(queryByText(/서울/)).not.toBeNull();
    expect(queryByText(/대전/)).not.toBeNull();
  });

  it('renders categories', () => {
    const { queryByText } = renderApp();

    expect(queryByText(/한식/)).not.toBeNull();
    expect(queryByText(/일식/)).not.toBeNull();
  });

  it('renders restautants', () => {
    const { queryByText } = renderApp();

    expect(queryByText(/두향/)).not.toBeNull();
    expect(queryByText(/맥도날드/)).not.toBeNull();
  });
});
