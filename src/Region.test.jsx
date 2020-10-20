import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Region from './Region';

describe('Region', () => {
  const handleClick = jest.fn();
  const regionRender = ({ region }) => render((
    <Region onClick={handleClick} region={region} />
  ));

  it('버튼 클릭 시 onClick 핸들러가 실행된다.', () => {
    const { getByText } = regionRender({ region: '대전' });
    const button = getByText(/대전/);

    expect(button).not.toBeNull();

    expect(handleClick).not.toBeCalled();

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
