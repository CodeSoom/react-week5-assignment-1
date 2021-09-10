import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const handleClick = jest.fn();

  it('renders cateogries', () => {
    const { getByText } = render(<App />);

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
  });

  it('renders regions', () => {
    const { getByText } = render(<App />);

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('부산')).not.toBeNull();
  });

  it('listens click event', () => {
    const { getByText } = render(<App />);

    expect(getByText('한식')).not.toBeNull();

    fireEvent.click(getByText('한식'));

    expect(handleClick).toBeCalled();
    expect(getByText('한식(V)')).not.toBeNull();
  });
});
