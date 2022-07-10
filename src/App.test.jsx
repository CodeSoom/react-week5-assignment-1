import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';

describe('<App/>', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
  }));

  const renderApp = () => ((
    render(<App />)
  ));

  it('dispatch 호출', () => {
    renderApp();
    expect(dispatch).toBeCalled();
  });
});
