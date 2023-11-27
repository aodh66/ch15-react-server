import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const EB = ({ children }) => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onError={(err) => {
      console.log(err);
    }}
  >
    {children}
  </ErrorBoundary>
);

export default EB;
