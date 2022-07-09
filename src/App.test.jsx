import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';
import App from './App';

describe('<App/>', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const renderApp = () => ((
    render(<App />)
  ));

  it('dispatch 호출', () => {
    renderApp();
    expect(dispatch).toBeCalled();
  });
});
