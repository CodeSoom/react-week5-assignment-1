import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import App from './App';

describe('App', () => {
  it('지역명(버튼)들을 보여준다.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    const { queryByText } = render((
      <App />
    ));
    expect(dispatch).toBeCalled();
  });
});
