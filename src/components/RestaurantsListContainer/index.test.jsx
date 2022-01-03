import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsListContainer from '.';

jest.mock('react-redux');

describe('SearchFilterContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [{
      id: 1, category: 1, name: '김밥천국', address: '서울시 강남구 삼성동',
    }],
  }));

  it('renders restaurants list', () => {
    const { getByText } = render(<RestaurantsListContainer />);

    expect(getByText('김밥천국')).toBeInTheDocument();
  });
});
