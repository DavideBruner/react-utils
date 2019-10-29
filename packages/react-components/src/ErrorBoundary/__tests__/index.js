import { render } from '@testing-library/react';
import React from 'react';

import ErrorBoundary from '../index';

describe('ErrorBoundary', () => {
  const handleErrorMock = jest.fn();

  beforeEach(() => {
    // Needed to remove the annoying error message from the throw below
    jest.spyOn(window.console, 'error').mockImplementation(() => false);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = render(
      <ErrorBoundary onError={handleErrorMock}>
        No error expected
      </ErrorBoundary>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders an error message when an error is thrown, and log the error with user data', () => {
    const error = new Error('foo');
    const ErrorChild = () => {
      throw error;
    };

    const { container } = render(
      <ErrorBoundary onError={handleErrorMock}>
        <ErrorChild />
      </ErrorBoundary>,
    );

    expect(container).toMatchSnapshot();
    expect(handleErrorMock).toHaveBeenCalledTimes(1);
    expect(handleErrorMock.mock.calls[0][0]).toBe(error);
  });
});
