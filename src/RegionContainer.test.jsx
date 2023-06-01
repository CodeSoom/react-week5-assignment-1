import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import RegionContainer from './RegionContainer';

describe('RegionContainer', () => {
  const dispatch = jest.fn();
  jest.mock('react-redux');
  jest.mock('./services/fetchData');
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation(() => ({
    regionData:
    [
      { id: 1, name: '서울' },
      { id: 2, name: '부산' }],
  }));

  const renderRegionContainer = () => render(<RegionContainer />);

  it('데이터 받기', () => {
    const { getByText } = renderRegionContainer();

    expect(getByText('서울')).not.toBeNull();
    fireEvent.click(getByText('서울'));
    expect(dispatch).toBeCalled();
  });
});
