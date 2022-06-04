import { render } from '@testing-library/react';

import restaurants from '../../fixture/restaurants';
import { baseMessage } from '../../constants/emptyMessages';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  context('레스토랑 목록이 있으면', () => {
    it('화면에 레스토랑들이 보인다.', () => {
      const { getByRole, getByText } = render(<Restaurants restaurants={restaurants} />);

      expect(getByRole('list')).toBeInTheDocument();
      expect(getByText('서울')).toBeInTheDocument();
    });
  });

  context('레스토랑 목록이 없으면', () => {
    it('레스토랑 목록이 없다는 문구가 보인다.', () => {
      const { queryByRole, getByText } = render(<Restaurants restaurants={null} />);

      expect(queryByRole('list')).not.toBeInTheDocument();
      expect(getByText(baseMessage('레스토랑 목록')));
    });
  });
});
