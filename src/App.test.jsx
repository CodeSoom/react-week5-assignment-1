import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: ['서울', '대전', '대구']
  }))

  it('shows regions as buttons', () => {
    const { getByText } = render((
      <App />
    ));

    expect(dispatch).toBeCalledWith({
      type: 'getRegions'
    });

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();

    fireEvent.click(getByText('서울'));
    expect(getByText('서울')).toBeNull();
    expect(getByText('서울(V)')).not.toBeNull();
  })
})