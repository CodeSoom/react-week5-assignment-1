import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

describe('Restaurants', () => {
  it('Api의 정보가 있을 경우 해당 정보를 가져와 화면에 표시한다', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 11, name: 'A레스토랑' },
        { id: 22, name: 'B카페' },
        { id: 33, name: 'C베이커리' },
      ],
    }));

    const { container } = render((
      <Restaurants />
    ));

    expect(container).toHaveTextContent('A레스토랑');
  });

  it('Api의 정보가 없으면 아무런 정보도 화면에 표시하지 않는다', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [],
    }));

    const { getAllByRole } = render((
      <Restaurants />
    ));

    expect(getAllByRole('list')[0].innerText).toBeUndefined();
  });
});
