import { render } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  it('renders', () => {
    const regions = [
      { id: 1, name: '서울' },
    ];

    const { container } = render(<Regions regions={regions} />);

    expect(container).toHaveTextContent('서울');
  });
});
