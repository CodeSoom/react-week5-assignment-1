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
      clickedCategory: { id: '', name: '' },
      clickedRegion: { id: '', name: '' },
    }));

    render(<App />);

    expect(dispatch).toBeCalledTimes(2);
  });
});
