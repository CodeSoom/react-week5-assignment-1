import { render } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";

import SelectLists from './SelectLists';

jest.mock('react-redux');
jest.mock('./services/api');

beforeEach(() => {
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
});

describe('SelectLists', () => {
	it('Api의 정보가 있을 경우 해당 정보를 가져와 화면에 표시한다', () =>{
		const { getByText, getAllByRole } = render((
			<SelectLists />
		));

		expect(getByText(/대전/)).not.toBeNull();
		expect(getAllByRole('button').length).toBe(6);
	});

	it('regions의 정보가 없으면 categories의 정보만 가져와 화면에 표시한다', () =>{
		useSelector.mockImplementation((selector) => selector({
			regions: [],
			categories: [
				{id: 101, name: '한식'},
				{id: 202, name: '양식'},
				{id: 303, name: '분식'},
			],
		}));
	
		const { getByText, getAllByRole } = render((
			<SelectLists />
		));
	
		expect(getByText(/한식/)).not.toBeNull();
		expect(getAllByRole('button').length).toBe(3);
	});

	it('categories의 정보가 없으면 regions의 정보만 가져와 화면에 표시한다', () =>{
		useSelector.mockImplementation((selector) => selector({
			regions: [
				{id: 1, name: '서울'},
				{id: 2, name: '대전'},
				{id: 3, name: '부산'},
			],
			categories: [],
		}));
	
		const { getByText, getAllByRole } = render((
			<SelectLists />
		));
	
		expect(getByText(/서울/)).not.toBeNull();
		expect(getAllByRole('button').length).toBe(3);
	});

	it('Api의 정보가 모두 없으면 아무런 정보도 화면에 표시하지 않는다', () =>{
		useSelector.mockImplementation((selector) => selector({
			regions: [],
			categories: [],
		}));
	
		const { getAllByRole } = render((
			<SelectLists />
		));
	
		expect(getAllByRole('list')[0].innerText).toBeUndefined();
	});
});
