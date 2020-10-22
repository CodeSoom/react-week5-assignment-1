import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RegionItem from './RegionItem';

describe('RegionItem', () => {
  const handleClick = jest.fn();

  const renderRegionItem = ({ regionName, isSelected }) => render((
    <RegionItem
      regionName={regionName}
      isSelected={isSelected}
      onClick={handleClick}
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

  it('calls click handler when clicked', () => {
    const { getByText } = renderRegionItem({
      regionName: '부산',
      isSelected: false,
    });

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByText('부산'));

    expect(handleClick).toBeCalled();
  });
});
