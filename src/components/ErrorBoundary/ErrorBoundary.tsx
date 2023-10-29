import React, { Component, ReactNode } from 'react';
import { ErrorBoundaryState } from '../../utils/types';

interface ErrorProps {
  children: ReactNode;
}
class ErrorBoundary extends Component<ErrorProps, ErrorBoundaryState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
    };
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error: error.message };
  }

  componentDidCatch(error: Error) {
    this.setState({
      hasError: true,
      error: error.message,
    });
  }

  render() {
    const { error, hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div>
          Случилась шляпа, Морти опять накосячил. Подробнее:
          <br />
          <blockquote>{error}</blockquote>
        </div>
      );
    }

    return children; // Отображаем дочерние компоненты
  }
}

export default ErrorBoundary;
