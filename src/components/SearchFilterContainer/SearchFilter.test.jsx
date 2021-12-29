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
    const { getByLabelText, getByRole } = renderComponent({
      options: {
        regions: [{ id: 1, name: '서울' }], categories: [],
      },
    });

    expect(getByLabelText('지역')).toBeInTheDocument();
    expect(getByRole('option', { name: '서울' })).toBeInTheDocument();
  });

  it('renders categories', () => {
    const {
      getByLabelText,
      getByRole,
    } = renderComponent({ options: { regions, categories } });

    expect(getByLabelText('분류')).toBeInTheDocument();
    expect(getByRole('option', { name: '한식' })).toBeInTheDocument();
  });

  it('renders selected option value', () => {
    const { getByLabelText } = renderComponent({
      options: {
        regions,
        categories,
      },
      value: {
        region: regions[1].id,
        category: categories[1].id,
      },
    });

    expect(Number(getByLabelText('지역').value)).toBe(regions[1].id);
    expect(Number(getByLabelText('분류').value)).toBe(categories[1].id);
  });

  context('when region is changed', () => {
    it('calls onChange', () => {
      const { getByLabelText } = renderComponent({
        options: {
          regions,
          categories,
        },
        value: {
          region: regions[0].id,
          category: categories[0].id,
        },
      });

      fireEvent.change(getByLabelText('지역'), { target: { value: regions[1].id } });
      expect(handleChange).toBeCalledWith({ region: regions[1].id, category: categories[0].id });
    });
  });

  context('when category is changed', () => {
    it('calls onChange', () => {
      const { getByLabelText } = renderComponent({
        options: { regions, categories },
        value: {
          region: regions[0].id,
          category: categories[0].id,
        },
      });

      fireEvent.change(getByLabelText('분류'), { target: { value: categories[1].id } });
      expect(handleChange).toBeCalledWith({ region: regions[0].id, category: categories[1].id });
    });
  });
});
