import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import { regions, categories, restaurants } from '../__fixture__/restaurantsInfo';

import App from './App';

describe('<App/>', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    restaurants,
  }));

  const renderApp = () => ((
    render(<App />)
  ));

  it('dispatch 호출', () => {
    renderApp();
    expect(dispatch).toBeCalled();
  });
});
