import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    locations: [],
    categories: [],
    restaurants: [],
    location: { id: '', name: '' },
    category: { id: '', name: '' },
  }));

  it('renders page', () => {
    const { container } = render((
      <App />
    ));

    expect(dispatch).toBeCalledTimes(3);

    expect(container).toHaveTextContent('지역');
    expect(container).toHaveTextContent('분류');
  });
});
