import { render } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

describe('Regions', () => {
  it('지역 목록이 보여집니다.', () => {
    const { container } = render((
      <Regions
        regions={regions}
      />
    ));

    regions.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
