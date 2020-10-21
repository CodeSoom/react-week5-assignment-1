import React from 'react';

import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  const name = '서울';

  it('renders', () => {
    const { container } = render(<Button name={name} />);

    expect(container).not.toBeNull();
    expect(container).toHaveTextContent('서울');
  });
});
