import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { restaurants } from '../fixtures/data';
import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();
  jest.mock('react-redux');
  jest.mock('./services/api');

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation(() => ({ restaurants }));

  const renderRestaurantsContainer = () => render(<RestaurantsContainer />);

  it('식당 리스트가 보인다', () => {
    const { getByText } = renderRestaurantsContainer();
    expect(getByText('코코식당')).not.toBeNull();
  });
  it('받아온 식당데이터가 변경되는 경우 식당이 보인다. ', () => {
    useSelector.mockImplementation(() => ({
      restaurants: [
        { id: 1, name: '바뀐식당' }, { id: 2, name: '이렇게' },
      ],
    }));
    const { getByText } = renderRestaurantsContainer();
    expect(getByText('바뀐식당')).not.toBeNull();
  });
});
