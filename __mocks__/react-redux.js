export const useDispatch = jest.fn(() => jest.fn());

export const useSelector = jest.fn((selector) => selector({}));
