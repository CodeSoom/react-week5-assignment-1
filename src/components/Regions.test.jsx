import { render } from '@testing-library/react';

import regions from '../../fixture/regions';

import Regions from './Regions';

describe('Regions', () => {
  context('지역 목록을 가져왔으면', () => {
    test('화면에 지역들이 보인다.', () => {
      const { getByRole, getByText } = render(<Regions regions={regions} />);

      expect(getByRole('list')).toBeInTheDocument();
      expect(getByText('서울')).toBeInTheDocument();
    });
  });

  context('지역 목록을 가져오지 못했으면', () => {
    test('지역 목록이 나오지 않고 에러 메세지가 나온다', () => {
      const { queryByRole, getByText } = render(<Regions regions={null} />);

      expect(queryByRole('list')).not.toBeInTheDocument();
      expect(getByText(/지역 목록을 가져오지 못했어요/));
    });
  });
});
