import React from 'react';

import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  context('with regions', () => {
    it('exist region 서울', () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        regions: [{
          id: 1,
          name: '서울',
        }],
      }));
      const { container } = render(<RegionsContainer />);
      expect(container).toHaveTextContent('서울');
    });
  });
  context('without regions', () => {
    it('can see "지역정보가 없습니다."', () => {
      useSelector.mockImplementation((selector) => selector({
        regions: [],
      }));
      const { container } = render(<RegionsContainer />);
      expect(container).toHaveTextContent('지역 정보가 없습니다.');
    });
  });
});
