import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

jest.mock('react-redux');
jest.mock('./services/api');

describe('Regions', () => {
  it('Api의 정보가 있을 경우 해당 정보를 가져와 화면에 표시한다', () => {
    const dispatch = jest.fn();
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
        { id: 2, name: '대전' },
        { id: 3, name: '부산' },
      ],
    }));
    useDispatch.mockImplementation(() => dispatch);

    const { getByText, getAllByRole } = render((
      <Regions />
    ));

    expect(getByText(/서울/)).not.toBeNull();
    expect(getAllByRole('button').length).toBe(3);
  });

  it('Api의 정보가 없으면 아무런 정보도 화면에 표시하지 않는다', () => {
    const dispatch = jest.fn();
    useSelector.mockImplementation((selector) => selector({
      regions: [],
    }));
    useDispatch.mockImplementation(() => dispatch);

    const { getAllByRole } = render((
      <Regions />
    ));

    expect(getAllByRole('list')[0].innerText).toBeUndefined();
  });

  it('select한 값이 있을 경우 selectedRegion에 추가된다', () => {
    const dispatch = jest.fn();
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '부산' },
      ],
      selectedRegion: null,
    }));
    useDispatch.mockImplementation(() => dispatch);

    const { container, getByText } = render((
      <Regions />
    ));

    expect(container).toHaveTextContent('부산');
    fireEvent.click(getByText('부산'));
    expect(dispatch).toBeCalled();
  });
});
