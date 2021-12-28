import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import LocationsContainer from './LocationsContainer';

jest.mock('react-redux');
jest.mock('../../services/api');

describe('LocationsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    dispatch.mockRestore();
  });

  it('컴포넌트 mount시, 지역명들을 fetch한다.', async () => {
    useSelector.mockImplementation((selector) => selector({
      locations: [],
    }));

    render(<LocationsContainer />);
    expect(dispatch).toBeCalled();
  });

  it('지역을 클릭하면 dispatch를 실행한다.', () => {
    useSelector.mockImplementation((selector) => selector({
      locations: [
        { id: 1, name: '서울' },
      ],
    }));

    const { getByText } = render(<LocationsContainer />);

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith({ id: 1, name: '서울' });
  });
});
