import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer test', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        id: 1,
        name: '모토쿠라시',
        category: '일식',
        place: '서울 송파구',
      },
    ],
  }));

  const renderListContainer = () => render(<ListContainer />);

  it('renders text of List', () => {
    const { container } = renderListContainer();

    expect(container).toHaveTextContent('모토쿠라시');
    expect(container).toHaveTextContent('일식');
    expect(container).toHaveTextContent('서울 송파구');
  });
});
