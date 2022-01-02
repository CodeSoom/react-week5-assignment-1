import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

jest.mock('react-redux');
jest.mock('./services/api');

describe('Regions', () => {
  context('regions에 데이터가 있을 경우', () => {
    it('해당 정보를 가져와 화면에 표시한다', () => {
      const dispatch = jest.fn();
      useSelector.mockImplementation((selector) => selector({
        regions: [
          { id: 1, name: '서울' },
          { id: 2, name: '대전' },
          { id: 3, name: '부산' },
        ],
      }));
      useDispatch.mockImplementation(() => dispatch);

      const { getByText, getAllByRole } = render((
        <Regions />
      ));

      expect(getByText(/서울/)).not.toBeNull();
      expect(getAllByRole('button').length).toBe(3);
    });

    it('select한 값이 있을 경우 selectedRegion에 추가된다', () => {
      const dispatch = jest.fn();
      useSelector.mockImplementation((selector) => selector({
        regions: [
          { id: 1, name: '부산' },
        ],
        selectedRegion: null,
      }));
      useDispatch.mockImplementation(() => dispatch);

      const { container, getByText } = render((
        <Regions />
      ));

      expect(container).toHaveTextContent('부산');
      fireEvent.click(getByText('부산'));
      expect(dispatch).toBeCalled();
    });
  });

  context('regions에 데이터가 없을 경우', () => {
    it('목록이 없다는 문구를 표시한다', () => {
      const dispatch = jest.fn();
      useSelector.mockImplementation((selector) => selector({
        regions: [],
      }));
      useDispatch.mockImplementation(() => dispatch);

      const { container } = render((
        <Regions />
      ));

      expect(container).toHaveTextContent('목록이 없습니다');
    });
  });
});
