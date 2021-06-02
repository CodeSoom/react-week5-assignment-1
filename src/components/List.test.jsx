import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import List from './List';

jest.mock('react-redux');

it('', () => {
  useSelector.mockImplementation((selector) => selector({
    selected: {
      restaurants: [{
        id: 5,
        categoryId: 3,
        name: '원초밥',
        address: '서울 강남구',
        information: '원초밥 in 서울 강남구',
      }],
    },
  }));

  const { container } = render(<List />);
  expect(container).toHaveTextContent('원초밥');
});
