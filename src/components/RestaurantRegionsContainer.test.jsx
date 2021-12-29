import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantRegionsContainer from './RestaurantRegionsContainer';
import { regions } from '../../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantRegionsContainer', () => {
  it('컴포넌트가 랜더링 된 후 지역을 가져옵니다.', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockImplementation(() => mockDispatch);
    useSelector.mockImplementation(() => ({ regions }));

    render(<RestaurantRegionsContainer />);

    expect(mockDispatch).toBeCalled();
  });
});
