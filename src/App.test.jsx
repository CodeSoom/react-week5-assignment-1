import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      selectedRegion: { id: 0, name: '' },
      selectedCategory: { id: 0, name: '' },
      restaurants: [
        { id: 1, categoryId: 1, name: '양천주가' },
      ],
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders App', () => {
    const { queryByText } = render(<App />);

    expect(dispatch).toBeCalled();
    expect(queryByText(/서울/)).not.toBeNull();
    expect(queryByText(/한식/)).not.toBeNull();
    expect(queryByText(/양천주가/)).not.toBeNull();
  });
});
