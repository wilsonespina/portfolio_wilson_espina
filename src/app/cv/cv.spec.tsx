import { render } from '@testing-library/react';

import CV from './cv';

describe('CV', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CV />);
    expect(baseElement).toBeTruthy();
  });
});
