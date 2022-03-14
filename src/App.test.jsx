import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  it('기본적인 App 화면이 렌더링 된다', () => {
    const dispatch = jest.fn();
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
        { id: 2, name: '대전' },
        { id: 3, name: '부산' },
      ],
      categories: [
        { id: 101, name: '한식' },
        { id: 202, name: '양식' },
        { id: 303, name: '분식' },
      ],
      restaurants: [
      ],
    }));
    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = render((
      <App />
    ));

    expect(dispatch).toBeCalled();
    expect(getByText(/Restaurants/)).not.toBeNull();
    expect(getByText(/서울/)).not.toBeNull();
    expect(getByText(/한식/)).not.toBeNull();
  });
});
