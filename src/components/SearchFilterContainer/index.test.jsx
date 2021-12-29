import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import SearchFilterContainer from '.';
import { setFilter } from '../../store/actions';

jest.mock('react-redux');

describe('SearchFilterContainer', () => {
  const dispatch = jest.fn();
  useSelector.mockImplementation((selector) => selector({
    regions: [{ id: 1, name: '서울' }, { id: 2, name: '경기' }],
    categories: [{ id: 1, name: '한식' }, { id: 2, name: '중식' }],
    filter: {
      region: '서울',
      category: '한식',
    },
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
    const { getByLabelText } = render(<SearchFilterContainer value={{ region: '경기', category: '중식' }} />);

    expect(getByLabelText('지역')).toHaveValue('서울');
    expect(getByLabelText('분류')).toHaveValue('한식');
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
      fireEvent.change(getByLabelText('지역'), { target: { value: '경기' } });
      expect(dispatch).toBeCalledWith(setFilter({ region: '경기', category: '한식' }));
    });
  });

  context('when category is changed', () => {
    it('calls dispatch with setFilter', () => {
      const { getByLabelText } = render(<SearchFilterContainer />);
      fireEvent.change(getByLabelText('분류'), { target: { value: '중식' } });
      expect(dispatch).toBeCalledWith(setFilter({ region: '서울', category: '중식' }));
    });
  });
});
