import { useDispatch, useSelector } from 'react-redux';

import CategoriesButton from '../component/CategoriesButton';

import { setFieldId } from '../modules/actions';

export default function CategoriesButtonContainer({ data }) {
  const { categorieId } = useSelector((state) => ({
    categorieId: state.categorieId,
  }));

  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { name, value } = e.target;
    dispatch(setFieldId({ name, value }));
  };

  return (
    <CategoriesButton
      onClick={handleClick}
      data={data}
      categorieId={categorieId}
    />
  );
}
