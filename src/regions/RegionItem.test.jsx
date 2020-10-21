import React from 'react';

import { render } from '@testing-library/react';

import RegionItem from './RegionItem';

describe('RegionItem', ({ regionName, isSelected }) => {
  const renderRegionItem = render((
    <RegionItem
      regionName={regionName}
      isSelected={isSelected}
    />
  ));

  it('renders region\'s name if not selected', () => {
    const { queryByText } = renderRegionItem({
      regionName: '부산',
      isSelected: false,
    });

    expect(queryByText(/부산/)).not.toBeNull();
  });

  it('renders region\'s name and check if selected', () => {
    const { queryByText } = renderRegionItem({
      regionName: '부산',
      isSelected: true,
    });

    expect(queryByText(/부산\(V\)/)).not.toBeNull();
  });
});
