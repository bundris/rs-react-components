import { Component, ErrorInfo, ReactNode } from 'react';

type ErrorProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorProps, ErrorBoundaryState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(`This is error: ${error}`);
    console.log(`This is errorInform: ${errorInfo.componentStack}`);
    this.setState({
      hasError: true,
    });
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <div>Morty failed again</div>;
    }

    return children; // Отображаем дочерние компоненты
  }
}

export default ErrorBoundary;
