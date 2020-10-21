import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, region: '서울', isChecked: false },
      { id: 2, region: '대구', isChecked: false },
    ],
  }));

  it('show all regions', () => {
    const { getByText } = render(<RegionsContainer />);

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
  });

  context('click region', () => {
    it('calls check dispatch', () => {
      const { getByText } = render(<RegionsContainer />);

      const regions = [
        { id: 1, region: '서울', isChecked: false },
      ];

      fireEvent.click(getByText('서울'));

      expect(dispatch).toBeCalledWith(
        {
          type: 'checkRegions',
          payload: { id: regions[0].id, isChecked: regions[0].isChecked },
        },
      );
    });

    it('initialize previously checked region', () => {
      const { getByText } = render(<RegionsContainer />);

      const regions = [
        { id: 1, region: '서울', isChecked: false },
        { id: 2, region: '대구', isChecked: false },
      ];

      fireEvent.click(getByText('서울'));

      expect(dispatch).toBeCalledWith(
        {
          type: 'checkRegions',
          payload: { id: regions[0].id, isChecked: regions[0].isChecked },
        },
      );

      fireEvent.click(getByText('대구'));

      expect(dispatch).toBeCalledWith(
        {
          type: 'checkRegions',
          payload: { id: regions[1].id, isChecked: regions[1].isChecked },
        },
      );

      expect(dispatch).toBeCalledWith(
        {
          type: 'initializeCheckedRegions',
          payload: { id: regions[1].id },
        },
      );
    });
  });
});
