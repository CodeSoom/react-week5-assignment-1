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

  it('renders regions and categories', () => {
    const { getByText } = renderComponent({ options: { regions, categories } });

    expect(getByText('서울')).toBeInTheDocument();
    expect(getByText('한식')).toBeInTheDocument();
  });

  context('when region and category are selected', () => {
    const value = { region: regions[0].id, category: categories[0].id };

    it('renders selected option value', () => {
      const { getByText } = renderComponent({
        options: {
          regions,
          categories,
        },
        value,
      });

      expect(getByText(`${regions[0].name}(V)`)).toBeInTheDocument();
      expect(getByText(`${categories[0].name}(V)`)).toBeInTheDocument();
    });

    describe('Click region', () => {
      it('calls onChange handler', () => {
        const { getByText } = renderComponent({
          options: {
            regions,
            categories,
          },
          value,
        });

        fireEvent.click(getByText(regions[1].name));
        expect(handleChange).toBeCalledWith({ region: regions[1].id, category: categories[0].id });
      });
    });

    describe('Click category', () => {
      it('calls onChange handler', () => {
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
});
