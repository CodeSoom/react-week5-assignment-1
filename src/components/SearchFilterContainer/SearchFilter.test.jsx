import { fireEvent, render } from '@testing-library/react';

import SearchFilter from './SearchFilter';

const regions = [{ id: 1, name: '서울' }, { id: 2, name: '경기' }];
const categories = [{ id: 1, name: '한식' }, { id: 2, name: '중식' }];

describe('SearchFilter', () => {
  const handleChange = jest.fn();
  let renderComponent;

  beforeEach(() => {
    handleChange.mockClear();
    renderComponent = ({ options = {}, value }) => render(
      <SearchFilter options={options} value={value} onChange={handleChange} />,
    );
  });

  it('renders regions', () => {
    const { getByText } = renderComponent({
      options: {
        regions: [{ id: 1, name: '서울' }], categories: [],
      },
    });

    expect(getByText('서울')).toBeInTheDocument();
  });

  it('renders categories', () => {
    const { getByText } = renderComponent({ options: { regions, categories } });

    expect(getByText('한식')).toBeInTheDocument();
  });

  it('renders selected option value', () => {
    const { getByText } = renderComponent({
      options: {
        regions,
        categories,
      },
      value: {
        region: regions[1].id,
        category: categories[1].id,
      },
    });

    expect(getByText(`${regions[1].name}(V)`)).toBeInTheDocument();
    expect(getByText(`${categories[1].name}(V)`)).toBeInTheDocument();
  });

  context('when region is changed', () => {
    it('calls onChange', () => {
      const { getByText } = renderComponent({
        options: {
          regions,
          categories,
        },
        value: {
          region: regions[0].id,
          category: categories[0].id,
        },
      });

      fireEvent.click(getByText(regions[1].name));
      expect(handleChange).toBeCalledWith({ region: regions[1].id, category: categories[0].id });
    });
  });

  context('when category is changed', () => {
    it('calls onChange', () => {
      const { getByText } = renderComponent({
        options: { regions, categories },
        value: {
          region: regions[0].id,
          category: categories[0].id,
        },
      });

      fireEvent.click(getByText(categories[1].name));
      expect(handleChange).toBeCalledWith({ region: regions[0].id, category: categories[1].id });
    });
  });
});
