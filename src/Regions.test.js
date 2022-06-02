import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  it('renders', () => {
    const regions = [
      { id: 1, name: '서울' },
    ];

    const { container } = render(<Regions regions={regions} />);

    expect(container).toHaveTextContent('서울');
  });

  it('check the clickedRegion', () => {
    const regions = [
      { id: 1, name: '서울' },
    ];

    const { getByText, getByDisplayValue } = render(<Regions regions={regions} />);

    fireEvent.click(getByText('서울'));

    expect(getByDisplayValue('서울(V)')).toBeInTheDocument();
  });
});
