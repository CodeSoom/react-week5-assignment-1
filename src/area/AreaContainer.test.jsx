import { render } from '@testing-library/react';

import AreaContainer from './AreaContainer';

describe('AreaContainer', () => {
  const { getByText } = render((
    <AreaContainer />
  ));

  describe('제목', () => {
    it('제목이 보인다', () => {
      expect(getByText(/지역/)).not.toBeNull();
    });
  });
});
