import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

jest.mock('./services/api');

describe('RegionsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    checkedRegion: {},
    regions: [
      { id: 1, name: '서울' },
      { id: 2, name: '대구' },
      { id: 3, name: '부산' },
    ],
  }));

  it('지역 목록을 보여준다', () => {
    const { getByText } = render((
      <RegionsContainer />
    ));

    expect(getByText('서울')).toBeInTheDocument();
    expect(getByText('대구')).toBeInTheDocument();
    expect(getByText('부산')).toBeInTheDocument();
  });

  it('목록이 클릭되면 체크된 목록으로 변경한다', () => {
    const { getByText } = render((
      <RegionsContainer />
    ));

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith({
      type: 'updateCheckedRegion',
      payload: {
        checkedRegion: {
          id: 1,
          text: '서울',
        },
      },
    });
  });
});
