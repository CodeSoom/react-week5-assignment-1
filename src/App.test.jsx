import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('레스토랑 지역 목록 렌더링', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [{
        id: 1,
        name: '서울',
      }],
    }));
    const { getByText } = render(<App />);

    expect(getByText('서울')).not.toBeNull();
  });
});
