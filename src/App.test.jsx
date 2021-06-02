import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('레스토랑 지역 목록을 그린다', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
    }));

    const { getByText } = render(<App />);

    expect(getByText(/서울/)).not.toBeNull();
  });

  it('레스토랑 분류 목록을 그린다', () => {
    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 1, name: '한식' },
      ],
    }));

    const { getByText } = render(<App />);

    expect(getByText(/한식/)).not.toBeNull();
  });
});
