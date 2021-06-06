import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = useDispatch();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      selectedRegion: { Region: { id: 1, name: '서울' } },
    }));
  });

  it('renders regions list', () => {
    const { queryByText } = render(<RegionsContainer />);

    expect(queryByText('서울')).not.toBeNull();
  });

  it('handleClick event and dispatches regionsContainer', () => {
    const { queryByText } = render(<RegionsContainer />);

    fireEvent.click(queryByText('서울'));

    expect(dispatch).toBeCalledWith({
      type: 'selecteRegion',
      payload: { region: { id: 1, name: '서울' } },
    });
  });
});
