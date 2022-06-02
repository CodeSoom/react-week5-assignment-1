import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  it('renders', () => {
    const regions = [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
    ];

    const clickedRegion = '서울';

    const { container } = render(<Regions regions={regions} clickedRegion={clickedRegion} />);

    expect(container).toHaveTextContent('서울(V)');
    expect(container).toHaveTextContent('대전');
  });

  it('check the clicked region', () => {
    const handleClick = jest.fn();

    const regions = [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
    ];

    const { getByText } = render(<Regions regions={regions} onClick={handleClick} />);

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });
});
