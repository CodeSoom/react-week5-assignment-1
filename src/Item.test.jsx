import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import Item from './Item';

jest.mock('react-redux');

describe('Item', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  context('with region value', () => {
    it('render "region" button', () => {
      const region = {
        id: 1,
        name: '서울',
      };

      const { getByRole } = render(
        <Item value={region} />,
      );

      expect(getByRole('button', { name: region.name })).toBeInTheDocument();
    });
  });

  context('with category value', () => {
    it('render "category" button', () => {
      const category = {
        id: 1,
        name: '한식',
      };

      const { getByRole } = render(
        <Item value={category} />,
      );

      expect(getByRole('button', { name: category.name })).toBeInTheDocument();
    });
  });

  context('when click "region" button', () => {
    const value = {
      id: 1,
      name: '서울',
    };

    // TODO: delete 주석
    // Item 은 렌더링과 버튼을 클릭하는 역할이 있음
    // => 렌더링은 name 렌더 및 selected 면 V 를 추가 해서 렌더
    // => 클릭은 selectedRegion 을 변경함.
    it('set selectedRegion', () => {
      const { getByRole } = render(
        <Item value={value} />,
      );

      fireEvent.click(getByRole('button', { name: value.name }));

      expect(dispatch).toBeCalledWith({
        type: 'setSelectedRegion',
        payload: {
          name: value.name,
        },
      });
    });
  });
});
