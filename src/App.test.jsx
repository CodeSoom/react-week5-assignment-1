import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const renderApp = () => render(<App />);

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [
        {
          id: 1,
          name: '서울',
        },
        {
          id: 2,
          name: '대전',
        },
        {
          id: 3,
          name: '대구',
        },
        {
          id: 4,
          name: '부산',
        },
        {
          id: 5,
          name: '광주',
        },
        {
          id: 6,
          name: '강원도',
        },
        {
          id: 7,
          name: '인천',
        },
        {
          id: 8,
          name: '제주',
        },
        {
          id: 9,
          name: '전주',
        },
        {
          id: 10,
          name: '순천',
        },
        {
          id: 11,
          name: '독도',
        },
      ],
    }));
  });

  it('App 렌더링', () => {
    const { container } = renderApp();

    expect(container).not.toBeNull();
  });

  it('렌더링 시, 지역 리스트가 노출 된다.', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대전');
  });

  it('렌더링 시, 카테고리 리스트가 노출된다.', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('중식');
  });
});
