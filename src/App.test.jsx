import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    locations: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 11, name: '한식' },
    ],
    restaurants: [
      {
        id: 101, name: '마녀식당', type: '일식', address: '서울시 강남구',
      },
    ],
  }));

  it('renders list component', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('한식')).not.toBeNull();
    expect(getByText('마녀식당')).not.toBeNull();
  });

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
