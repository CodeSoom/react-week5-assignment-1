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
    const { getByLabelText, getByText } = render(<SearchFilterContainer />);

    expect(getByLabelText('지역')).toBeInTheDocument();
    expect(getByText('서울')).toBeInTheDocument();
  });

  it('renders category options', () => {
    const { getByLabelText, getByText } = render(<SearchFilterContainer />);

    expect(getByLabelText('분류')).toBeInTheDocument();
    expect(getByText('한식')).toBeInTheDocument();
  });

  it('renders selected option value', () => {
    const { getByLabelText } = render(
      <SearchFilterContainer
        value={{ region: regions[1].id, category: categories[1].id }}
      />,
    );

    expect(Number(getByLabelText('지역').value)).toBe(regions[0].id);
    expect(Number(getByLabelText('분류').value)).toBe(categories[0].id);
  });

  context('when the component did mounted', () => {
    it('initializes options', () => {
      render(<SearchFilterContainer />);
      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('when region is changed', () => {
    it('calls dispatch with setFilter', () => {
      const { getByLabelText } = render(<SearchFilterContainer />);
      fireEvent.change(getByLabelText('지역'), { target: { value: regions[1].id } });
      expect(dispatch).toBeCalledWith(setFilter({
        region: regions[1].id,
        category: categories[0].id,
      }));
    });
  });

  context('when category is changed', () => {
    it('calls dispatch with setFilter', () => {
      const { getByLabelText } = render(<SearchFilterContainer />);
      fireEvent.change(getByLabelText('분류'), { target: { value: categories[1].id } });
      expect(dispatch).toBeCalledWith(setFilter({
        region: regions[0].id, category: categories[1].id,
      }));
    });
  });
});
