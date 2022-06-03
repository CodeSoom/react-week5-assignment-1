import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
  ];

  function renderRegions(clickedRegion) {
    return render((
      <Regions
        regions={regions}
        clickedRegion={clickedRegion}
        onClick={handleClick}
      />
    ));
  }

  it('renders', () => {
    const clickedRegion = { id: 1, name: '서울' };

    const { container } = renderRegions(clickedRegion);

    expect(container).toHaveTextContent('서울(V)');
    expect(container).toHaveTextContent('대전');
  });

  it('check the clicked region', () => {
    const clickedRegion = { id: '', name: '' };

    const { getByText } = renderRegions(clickedRegion);

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });
});
