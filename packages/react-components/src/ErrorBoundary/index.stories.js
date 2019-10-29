import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';

import ErrorBoundary from './index';

import '../../index.scss';

function ErrorButtonDispatcher() {
  const [hasError, setError] = useState(false);

  if (hasError) {
    throw new ErrorBoundary('an unexpected error');
  }

  return (
    <button type="button" onClick={() => setError(true)}>
      Click to dispatch an error
    </button>
  );
}

storiesOf('ErrorBoundary', module)
  .add('When an unexpected error occured', () => (
    <ErrorBoundary onError={action('logger')}>
      <ErrorButtonDispatcher />
    </ErrorBoundary>
  ));
