import categories from '../fixtures/categories';
import regions from '../fixtures/regions';

export const useDispatch = jest.fn();

export const useSelector = jest.fn();

export const fetchRegions = jest.fn(async () => regions);

export const fetchCategories = jest.fn(async () => categories);
