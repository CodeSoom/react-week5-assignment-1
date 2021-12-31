import { render } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  context('화면에 App이 표시된다', () => {
    it('Api의 정보가 있을 경우 해당 정보를 가져와 화면에 표시한다', () =>{
      const dispatch = jest.fn();
      useSelector.mockImplementation((selector) => selector({
        regions: [
          {id: 1, name: '서울'},
          {id: 2, name: '대전'},
          {id: 3, name: '부산'},
        ],
        categories: [
          {id: 101, name: '한식'},
          {id: 202, name: '양식'},
          {id: 303, name: '분식'},
        ],
      }));
      useDispatch.mockImplementation(() => dispatch);

      const { getByText, getAllByRole } = render((
        <App />
      ));

      expect(getByText(/대전/)).not.toBeNull();
      expect(getAllByRole('button').length).toBe(6);
    });

    it('Api의 정보가 없으면 해당 정보를 제외하고 정보를 가져와 화면에 표시한다', () =>{
      const dispatch = jest.fn();
      useSelector.mockImplementation((selector) => selector({
        regions: [],
        categories: [
          {id: 101, name: '한식'},
          {id: 202, name: '양식'},
          {id: 303, name: '분식'},
        ],
      }));
      useDispatch.mockImplementation(() => dispatch);

      const { getByText, getAllByRole } = render((
        <App />
      ));

      expect(getByText(/한식/)).not.toBeNull();
      expect(getAllByRole('button').length).toBe(3);
    });
  });
});
