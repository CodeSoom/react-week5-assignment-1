import { render } from '@testing-library/react';

import SearchFilter from './SearchFilter';

describe('SearchFilter', () => {
  const renderComponent = ({ regions, categories }) => render(
    <SearchFilter regions={regions} categories={categories} />,
  );

  it('render regions', () => {
    const { getByLabelText, getByRole } = renderComponent({ regions: [{ id: 1, name: '서울' }], categories: [] });

    expect(getByLabelText('지역')).toBeInTheDocument();
    expect(getByRole('option', { value: '서울' })).toBeInTheDocument();
  });

  it('render categories', () => {
    const categories = [{ id: 1, name: '한식' }];
    const { getByLabelText, getByRole } = renderComponent({ regions: [], categories });

    expect(getByLabelText('분류')).toBeInTheDocument();
    expect(getByRole('option', { value: '한식' })).toBeInTheDocument();
  });
});
