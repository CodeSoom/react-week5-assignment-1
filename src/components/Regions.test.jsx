import { render } from '@testing-library/react';
import given from 'given2';
import 'given2/setup';

import Regions from './Regions';

describe('Regions', () => {
  given('regions', () => [{
    id: 1,
    name: '서울',
  }]);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderRegions() {
    return render((
      <Regions
        regions={given.regions}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with regions', () => {
    given('regions', () => [{
      id: 1,
      name: '서울',
    }]);

    it('renders regions', () => {
      const { container } = renderRegions();

      expect(container).toHaveTextContent(/서울/);
    });
  });

  context('without regions', () => {
    given('regions', () => []);

    it('renders "지역이 없어요!"', () => {
      const { container } = renderRegions();

      expect(container).toHaveTextContent(/지역이 없어요!/);
    });
  });
});
