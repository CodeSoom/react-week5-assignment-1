import { fireEvent, render } from '@testing-library/react';

import SearchFilter from './SearchFilter';

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
    expect(getByRole('option', { value: '서울' })).toBeInTheDocument();
  });

  it('renders categories', () => {
    const categories = [{ id: 1, name: '한식' }];
    const { getByLabelText, getByRole } = renderComponent({ options: { regions: [], categories } });

    expect(getByLabelText('분류')).toBeInTheDocument();
    expect(getByRole('option', { value: '한식' })).toBeInTheDocument();
  });

  it('renders selected option value', () => {
    const { getByLabelText } = renderComponent({
      options: {
        regions: [{ id: 1, name: '서울' }, { id: 2, name: '경기' }],
        categories: [{ id: 1, name: '한식' }, { id: 2, name: '중식' }],
      },
      value: {
        region: '경기',
        category: '중식',
      },
    });

    expect(getByLabelText('지역')).toHaveValue('경기');
    expect(getByLabelText('분류')).toHaveValue('중식');
  });

  context('when region is changed', () => {
    it('calls onChange', () => {
      const { getByLabelText } = renderComponent({
        options: {
          regions: [{ id: 1, name: '서울' }, { id: 2, name: '경기' }],
          categories: [{ id: 1, name: '한식' }, { id: 2, name: '중식' }],
        },
        value: {
          region: '서울',
          category: '한식',
        },
      });

      fireEvent.change(getByLabelText('지역'), { target: { value: '경기' } });
      expect(handleChange).toBeCalledWith({ region: '경기', category: '한식' });
    });
  });

  context('when category is changed', () => {
    it('calls onChange', () => {
      const { getByLabelText } = renderComponent({
        options: {
          regions: [{ id: 1, name: '서울' }, { id: 2, name: '경기' }],
          categories: [{ id: 1, name: '한식' }, { id: 2, name: '중식' }],
        },
        value: {
          region: '서울',
          category: '한식',
        },
      });

      fireEvent.change(getByLabelText('분류'), { target: { value: '중식' } });
      expect(handleChange).toBeCalledWith({ region: '서울', category: '중식' });
    });
  });
});
