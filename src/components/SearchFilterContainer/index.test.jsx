import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import SearchFilterContainer from '.';
import { setFilter } from '../../store/actions';

jest.mock('react-redux');

describe('SearchFilterContainer', () => {
  const dispatch = jest.fn();
  const regions = [{ id: 1, name: '서울' }, { id: 2, name: '경기' }];
  const categories = [{ id: 1, name: '한식' }, { id: 2, name: '중식' }];

  const defaultOptionIndex = 0;

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    filter: { region: 1, category: 1 },
  }));

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders region options', () => {
    const { getByText } = render(<SearchFilterContainer />);

    expect(getByText(/서울/)).toBeInTheDocument();
  });

  it('renders category options', () => {
    const { getByText } = render(<SearchFilterContainer />);

    expect(getByText(/한식/)).toBeInTheDocument();
  });

  it('renders selected option value', () => {
    const { getByText } = render(<SearchFilterContainer />);

    expect(getByText(`${regions[defaultOptionIndex].name}(V)`)).toBeInTheDocument();
    expect(getByText(`${categories[defaultOptionIndex].name}(V)`)).toBeInTheDocument();
  });

  context('when the component did mounted', () => {
    it('initializes options', () => {
      render(<SearchFilterContainer />);
      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('when region is changed', () => {
    it('calls dispatch with setFilter', () => {
      const { getByText } = render(<SearchFilterContainer />);
      const newRegionOptionIndex = 1;

      fireEvent.click(getByText(regions[newRegionOptionIndex].name));

      expect(dispatch).toBeCalledWith(setFilter({
        region: regions[newRegionOptionIndex].id,
        category: categories[defaultOptionIndex].id,
      }));
    });
  });

  context('when category is changed', () => {
    it('calls dispatch with setFilter', () => {
      const { getByText } = render(<SearchFilterContainer />);
      const newCategoryOptionIndex = 1;

      fireEvent.click(getByText(categories[newCategoryOptionIndex].name));

      expect(dispatch).toBeCalledWith(setFilter({
        region: regions[defaultOptionIndex].id, category: categories[newCategoryOptionIndex].id,
      }));
    });
  });
});
