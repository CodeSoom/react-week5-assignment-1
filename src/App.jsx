import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RegionListContainer from './RegionListContainer';
import CategoryListContainer from './CategoryListContainer';
import { fetchCategories, fetchRegions } from './services';
import { setCategories, setRegions } from './store/actions';

const loadRegions = async (dispatch) => {
  const regions = await fetchRegions();

  dispatch(setRegions(regions));
};

const loadCategories = async (dispatch) => {
  const categories = await fetchCategories();

  dispatch(setCategories(categories));
};

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    loadRegions(dispatch);
    loadCategories(dispatch);
  }, []);

  return (
    <>
      <RegionListContainer />
      <CategoryListContainer />
    </>
  );
}
