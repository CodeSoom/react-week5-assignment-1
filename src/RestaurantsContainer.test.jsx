import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  it('선택된 지역/카테고리에 해당하는 식당들을 보여준다.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
    const { container } = render((
      <RestaurantsContainer />
    ));

    expect(container).toHaveTextContent('마법사주방');
  });
});
