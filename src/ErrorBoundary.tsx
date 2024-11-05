import CoreError from '@/common/components/CommError';
import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class ErrorBoundary extends Component<ErrorBoundaryProps, any> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <CoreError
          statusCode={500}
          title='Hệ thống đang bị gián đoạn'
          description='Vui lòng thử lại sau!'
        />
      );
    }

    return this.props.children;
  }
}
