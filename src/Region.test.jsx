import { render } from '@testing-library/react';

import Region from './Region';

describe('Region', () => {
  it('renders RegionList ', () => {
    const regionList = [
      {
        id: 1,
        name: '포항',
      },
    ];

    const { queryByText } = render(
      <Region
        regionList={regionList}
        onclickRegion={handleClick}
      />,
    );
    expect(queryByText('포항')).not.toBeNull();
  });
});
