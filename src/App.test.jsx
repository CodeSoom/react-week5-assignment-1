import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';
import { fetchRestaurants } from './store/actions';
import { initialState } from './store/reducer';

jest.mock('./store/actions');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('do nothing with initial state', () => {
    useSelector.mockImplementation(() => ({ ...initialState }));

    render(<App />);

    expect(fetchRestaurants).not.toHaveBeenCalled();
  });

  it('renders title, filter and list', () => {
    const { getByText } = render(<App />);

    expect(getByText('레스토랑 검색')).toBeInTheDocument();
    expect(getByText('검색 필터')).toBeInTheDocument();
    expect(getByText('레스토랑 리스트')).toBeInTheDocument();
  });

  context('when there is an active filter', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        ...initialState,
        filter: { region: 1, category: 1 },
      }));
    });

    it('calls fetchRestaurants', () => {
      render(<App />);

      expect(fetchRestaurants).toHaveBeenCalled();
    });
  });
});
