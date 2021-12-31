import { render } from "@testing-library/react";

import Lists from './Lists';

describe('Lists', () => {
  context('버튼을 담은 li 태그들이 목록으로 만들어진다', () => {
    it('item이 존재하면 해당 아이템으로 목록을 만든다', () => {
      const items = [
        {id: 1, name: '서울'},
        {id: 2, name: '대전'},
        {id: 3, name: '부산'},
      ];
      const clickHandler = jest.fn();

      const { getByText, getAllByRole } = render((
        <Lists items={items} onClick={clickHandler}/>
      ));

      expect(getAllByRole('listitem').length).toBe(3);
      expect(getAllByRole('button').length).toBe(3);
      expect(getByText(/서울/)).not.toBeNull();
      expect(getByText(/대전/)).not.toBeNull();
    });

    it('item이 존재하지 않으면 아무것도 출력하지 않는다', () => {
      const items = [];
      const clickHandler = jest.fn();

      const { getByRole } = render((
        <Lists items={items} onClick={clickHandler}/>
      ));

      expect(getByRole('list').innerHTML).toBe('');
    });
  });
});
