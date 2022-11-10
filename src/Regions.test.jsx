import { render } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

describe('Regions', () => {
  function renderRegions() {
    return render((<Regions regions={regions} />));
  }

  it('Regions가 렌더링된다.', () => {
    const { getByText } = renderRegions();

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
  });
});
