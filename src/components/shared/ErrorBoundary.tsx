import React, { ReactNode } from 'react'

interface ErrorBoundaryProp {
  children: React.ReactNode
  fallbackUI?: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProp,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProp) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('error', error)
    console.log('errorInfo', errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallbackUI ?? <h1>에러가 발생했습니다.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
