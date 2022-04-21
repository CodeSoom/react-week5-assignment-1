import { fireEvent, render } from '@testing-library/react';

import Region from './Region';

describe('Region', () => {
  const handleClick = jest.fn();

  const regionList = [
    {
      id: 1,
      name: '포항',
    },
  ];

  function renderRegion() {
    return render((
      <Region
        regionList={regionList}
        onClick={handleClick}
      />

    ));
  }

  it('renders RegionList ', () => {
    const { queryByText } = renderRegion();

    expect(queryByText('포항')).not.toBeNull();
  });

  it('calls handleClick when button is clicked', () => {
    const { getByText } = renderRegion();

    fireEvent.click(getByText('포항'));

    expect(handleClick).toBeCalled();
  });
});
