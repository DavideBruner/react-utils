import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

import WideError from '../WideError';

/** A wrapping component around the application.
 * This is used to display errors thrown anywhere in the component tree. */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    const { onError } = this.props;
    this.setState({ hasError: true });
    onError(error, info);
  }

  render() {
    const { children, className } = this.props;
    const { hasError } = this.state;
    const classes = cn('rau-error-boundary', className);

    if (!hasError) {
      return children;
    }

    return (
      <div className={classes}>
        <WideError title="Bear with us">
          <p>Something went wrong in our end, please contact support@usabilla.com</p>
        </WideError>
      </div>
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** A function to run when an error is thrown.
   * The function will be invoked with 2 arguments, the error message, and extra information */
  onError: PropTypes.func,
};

ErrorBoundary.defaultProps = {
  className: undefined,
  onError: undefined,
};
