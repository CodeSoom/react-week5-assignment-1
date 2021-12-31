import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  const renderApp = () => render(<App />);

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: {
        regions: [],
        activeId: -1,
      },
      categories: {
        categories: [],
        activeId: -1,
      },
      restaurants: {
        restaurants: [],
      },
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  it('지역 정보가 없으면, 사용자에게 안내 메시지를 보여준다.', () => {
    const { getByText } = renderApp();

    expect(getByText(/지역 정보를 가져오세요./)).toBeInTheDocument();
  });
});
