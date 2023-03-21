import { render } from '@testing-library/react';

import Experience2 from './experience2';

describe('Experience2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Experience2 />);
    expect(baseElement).toBeTruthy();
  });
});
