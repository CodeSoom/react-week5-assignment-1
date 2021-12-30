import { render } from '@testing-library/react';
import SelectableItem from '../../model/SelectableItem';
import Restaurants from './Restaurants';

describe('Restaurants', () => {
  it('전달된 음식점들을 노출한다.', () => {
    const restaurants = [{ id: 1, name: '양천주가' }].map((item) => new SelectableItem(item));
    const { getByText } = render(<Restaurants restaurants={restaurants} />);

    expect(getByText('양천주가')).not.toBeNull();
  });

  it('선택된 음식점의 경우, 이름과 함께 선택표시가 노출된다.', () => {
    const restaurants = [{ id: 1, name: '양천주가', selected: true }].map((item) => new SelectableItem(item));
    const { getByText } = render(<Restaurants restaurants={restaurants} />);

    expect(getByText('양천주가(V)')).not.toBeNull();
  });
});
