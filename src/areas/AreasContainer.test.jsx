import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import AreasContainer from './AreasContainer';

jest.mock('react-redux');

describe('AreasContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    areas: [{ id: 1, name: '서울' }],
  }));

  const { getByText } = render((
    <AreasContainer />
  ));

  describe('제목', () => {
    it('제목과 서울이 보인다', () => {
      expect(getByText(/지역/)).not.toBeNull();
      expect(getByText(/서울/)).not.toBeNull();
    });
  });
});
