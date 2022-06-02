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
    const handleClick = jest.fn();

    const regions = [
      { id: 1, name: '서울' },
    ];

    const { getByText } = render(<Regions regions={regions} onClick={handleClick} />);

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });
});
