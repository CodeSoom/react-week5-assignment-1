import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import RestaurantRegionsContainer from './RestaurantRegionsContainer';

jest.mock('react-redux');

describe('RestaurantRegionsContainer', () => {
  it('컴포넌트가 랜더링 된 후 지역을 가져옵니다.', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockImplementation(() => mockDispatch);

    render(<RestaurantRegionsContainer />);

    expect(mockDispatch).toBeCalled();
  });
});
