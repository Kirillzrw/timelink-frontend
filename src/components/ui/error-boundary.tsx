import type { ErrorInfo } from "react"
import { Component } from "react"

interface Props {
  children: React.ReactNode
  fallback: React.ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  private static logErrorToMyService(error: Error, componentStack: React.ErrorInfo["componentStack"]) {
    console.error("Caught by ErrorBoundary:", error)
    console.error("Component Stack:", componentStack)
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    ErrorBoundary.logErrorToMyService(error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}

export default ErrorBoundary
