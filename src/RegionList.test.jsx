import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import RegionList from './RegionList';

describe('RegionList', () => {
  const handleClick = jest.fn();

  given('selectedRegion', () => ({}));

  const renderRegionList = () => render((
    <RegionList
      regions={[
        { id: 1, name: '서울' },
        { id: 2, name: '대전' },
        { id: 3, name: '대구' },
      ]}
      onClick={handleClick}
      selectedRegion={given.selectedRegion}
    />
  ));

  it('renders regions', () => {
    const { container } = renderRegionList();

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대전');
    expect(container).toHaveTextContent('대구');
  });

  it('renders selected regions', () => {
    given('selectedRegion', () => ({ id: 1, name: '서울' }));

    const { container } = renderRegionList();

    expect(container).toHaveTextContent('서울(V)');
  });

  it('listens click event', () => {
    const { getByText } = renderRegionList();

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });
});
