import { render, screen } from '@testing-library/react';
import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RestaurantsContainer', () => {
  context('지역과 카테고리를 모두 체크하지 않았을 때', () => {
    it('레스토랑 목록을 화면에 렌더하지 않는다.', () => {
      render(<RestaurantsContainer />);

      screen.debug();
    });
  });

  context('지역과 카테고리를 모두 체크했을 때', () => {
    it('레스토랑 목록을 화면에 렌더한다.', () => {
      render(<RestaurantsContainer />);
    });
  });
});
