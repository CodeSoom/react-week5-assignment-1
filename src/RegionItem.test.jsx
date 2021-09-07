import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import RegionItem from './RegionItem';

describe('RegionItem', () => {
  const handleClick = jest.fn();

  given('isSelected', () => false);

  const renderRegionItem = () => render((
    <RegionItem
      region={{ id: 1, name: '서울' }}
      onClick={handleClick}
      isSelected={given.isSelected}
    />
  ));

  it('renders region', () => {
    const { container } = renderRegionItem();

    expect(container).toHaveTextContent('서울');
  });

  it('renders selected regions', () => {
    given('isSelected', () => true);

    const { container } = renderRegionItem();

    expect(container).toHaveTextContent('서울(V)');
  });

  it('listens click event', () => {
    const { getByText } = renderRegionItem();

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });
});
