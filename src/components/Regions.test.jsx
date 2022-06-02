import { render } from '@testing-library/react';

import regions from '../../fixture/regions';
import { baseMessage } from '../../constants/emptyMessages';

import Regions from './Regions';

describe('Regions', () => {
  context('지역 목록이 있으면', () => {
    test('화면에 지역들이 보인다.', () => {
      const { getByRole, getByText } = render(<Regions regions={regions} />);

      expect(getByRole('list')).toBeInTheDocument();
      expect(getByText('서울')).toBeInTheDocument();
    });
  });

  context('지역 목록이 없거나 비어있으면', () => {
    test('지역 목록이 비어있다는 문구가 보인다.', () => {
      const { queryByRole, getByText } = render(<Regions regions={null} />);

      expect(queryByRole('list')).not.toBeInTheDocument();
      expect(getByText(baseMessage('지역 목록')));
    });
  });
});
