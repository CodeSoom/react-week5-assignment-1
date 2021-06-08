import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

jest.mock('react-redux');

describe('Regions', () => {
  const regions = [
    { id: 1, name: '서울' },
  ];

  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      selectedRegion: { region: { id: 1, name: '서울' } },
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders regions list', () => {
    const { queryByText } = render(
      <Regions
        regions={regions}
      />,
    );

    expect(queryByText('서울')).not.toBeNull();
  });

  it('handleClick event and dispatches selecteRegion', () => {
    const { getByText } = render(
      <Regions
        regions={regions}
      />,
    );

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith({
      type: 'selecteRegion',
      payload: { region: { id: 1, name: '서울' } },
    });
  });
});
