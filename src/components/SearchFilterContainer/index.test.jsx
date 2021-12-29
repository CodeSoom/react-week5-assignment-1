import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import SearchFilterContainer from '.';
import { setFilter } from '../../store/actions';

jest.mock('react-redux');

describe('SearchFilterContainer', () => {
  const dispatch = jest.fn();
  const regions = [{ id: 1, name: '서울' }, { id: 2, name: '경기' }];
  const categories = [{ id: 1, name: '한식' }, { id: 2, name: '중식' }];
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

    expect(getByText(`${regions[0].name}(V)`)).toBeInTheDocument();
    expect(getByText(`${categories[0].name}(V)`)).toBeInTheDocument();
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

      fireEvent.click(getByText(regions[1].name));

      expect(dispatch).toBeCalledWith(setFilter({
        region: regions[1].id,
        category: categories[0].id,
      }));
    });
  });

  context('when category is changed', () => {
    it('calls dispatch with setFilter', () => {
      const { getByText } = render(<SearchFilterContainer />);

      fireEvent.click(getByText(categories[1].name));

      expect(dispatch).toBeCalledWith(setFilter({
        region: regions[0].id, category: categories[1].id,
      }));
    });
  });
});
