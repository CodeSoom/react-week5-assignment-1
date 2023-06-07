import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { regions } from '../fixtures/data';
import RegionContainer from './RegionContainer';

describe('RegionContainer', () => {
  const dispatch = jest.fn();
  jest.mock('react-redux');
  jest.mock('./services/api');
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation(() => ({ regions }));

  const renderRegionContainer = () => render(<RegionContainer />);

  it('데이터 받기', () => {
    const { getByText } = renderRegionContainer();

    expect(getByText('서울')).not.toBeNull();
    fireEvent.click(getByText('서울'));
    expect(dispatch).toBeCalled();
  });
});
