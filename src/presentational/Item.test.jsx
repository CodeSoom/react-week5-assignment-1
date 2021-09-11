import { render, fireEvent } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClick = jest.fn();

  const region = { id: 1, name: '서울' };

  function renderItem(checkedItem) {
    return (
      render(<Item
        name="region"
        item={region}
        handleClick={handleClick}
        checkedItem={checkedItem}
      />)
    );
  }

  it('목록을 보여준다', () => {
    const { getByText } = renderItem({});

    expect(getByText('서울')).toBeInTheDocument();
  });

  it('목록이 클릭되면 이벤트가 호출된다.', () => {
    const { getByText } = renderItem({});

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });

  it('체크된 목록을 보여준다', () => {
    const { getByText } = renderItem({
      id: 1,
      text: '서울',
    });

    expect(getByText('서울(V)')).toBeInTheDocument();
  });
});
