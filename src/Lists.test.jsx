import { fireEvent, render } from "@testing-library/react";

import Regions from './Regions';

describe('Button', () => {
  test('with a button and tags', () => {
    const dummyRegions = [
      {id: 1, name: '서울'},
      {id: 2, name: '대전'},
      {id: 3, name: '부산'},
    ];

    const { getAllByRole, getByText } = render((
      <Regions regions={dummyRegions} />
    ));
    
    expect(getByText(/대전/)).not.toBeNull();
    const buttons = getByText('서울');
    expect(buttons.click()).toBe('서울');
  });
});