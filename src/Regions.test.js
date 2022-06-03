import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
  ];

  function renderRegions(selectedRegion) {
    return render((
      <Regions
        regions={regions}
        selectedRegion={selectedRegion}
        onClick={handleClick}
      />
    ));
  }

  it('renders', () => {
    const selectedRegion = { id: 1, name: '서울' };

    const { container } = renderRegions(selectedRegion);

    expect(container).toHaveTextContent('서울(V)');
    expect(container).toHaveTextContent('대전');
  });

  it("Adds '(v)' when click the region button", () => {
    const selectedRegion = { id: '', name: '' };

    const { getByText } = renderRegions(selectedRegion);

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });
});
