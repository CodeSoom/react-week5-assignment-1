import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  it('renders', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories: [],
      regions: [],
      selectedCategory: { id: '', name: '' },
      selectedRegion: { id: '', name: '' },
      restaurants: [],
    }));

    render(<App />);

    expect(dispatch).toBeCalledTimes(2);
  });

  context('clickedCategory and clickedRegion is not empty', () => {
    it('Changes the restaurants', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        categories: [],
        regions: [],
        selectedCategory: { id: 1, name: '한식' },
        selectedRegion: { id: 1, name: '서울' },
        restaurants: [],
      }));

      render(<App />);

      expect(dispatch).toBeCalledTimes(3);
    });
  });
});
