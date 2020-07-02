import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const testRegions = [
    { id: 1, name: '서울' }, { id: 2, name: '대전' },
  ];

  const testCategories = [
    { id: 1, name: '한식' }, { id: 2, name: '중식' },
  ];

  context('when click region button', () => {
    it('dispatch setRegion', () => {
      useSelector.mockImplementation((selector) => selector({
        regions: testRegions,
        categories: testCategories,
      }));

      const { getByText } = render((
        <RegionsContainer />
      ));

      fireEvent.click(getByText(testRegions[0].name));

      expect(dispatch).toBeCalledWith({
        type: 'setRegion',
        payload: {
          regionName: '서울',
        },
      });
    });
  });

  context('when click category button', () => {
    it('dispatch setCategory', () => {

    });
  });
});
