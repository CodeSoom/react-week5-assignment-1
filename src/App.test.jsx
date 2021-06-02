import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  it('App화면에 목록과 카테고리가 그려진다', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
    }));

    const { getByText } = render(<App />);

    expect(getByText(/서울/)).not.toBeNull();
    expect(getByText(/한식/)).not.toBeNull();
  });
});
