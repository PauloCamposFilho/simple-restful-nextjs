import { ErrorProvider } from '../contexts/ErrorContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <ErrorProvider>
    <Component {...pageProps} />
  </ErrorProvider>
  );
}

export default MyApp
