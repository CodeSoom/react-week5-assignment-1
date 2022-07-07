import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { region, regions } from './fixtures/restaurant';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('Regions', () => {
  const dispathch = jest.fn();

  useDispatch.mockImplementation(() => dispathch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    region,
  }));

  const renderRegionsContainer = () => render((
    <RegionsContainer />
  ));

  it('regions가 렌더링된다', () => {
    const { getByText } = renderRegionsContainer();

    fireEvent.click(getByText('서울'));

    expect(dispathch).toBeCalled();
  });
});
