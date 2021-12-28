import { render } from '@testing-library/react';

import regions from '../fixtures/regions';

import Regions from './Regions';

describe('Regions', () => {
  it('regions 렌더링', () => {
    const { getByText } = render(<Regions regions={regions} />);

    expect(getByText('부산')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
  });
});
