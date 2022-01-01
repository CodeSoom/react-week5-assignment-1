import { fireEvent, render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import Regions from './Regions';

import regions from './fixtures/regions';

jest.mock('react-redux');
test('Regions', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
    checkedRegion: '',
  }));

  const handleClick = jest.fn();

  const { getByText } = render(<Regions
    regions={regions}
    checkedRegion=""
    onClick={handleClick}
  />);

  regions.forEach((category) => {
    expect(getByText(category.name)).not.toBeNull();
    fireEvent.click(getByText(category.name));
    expect(handleClick).toBeCalled();
  });
});
