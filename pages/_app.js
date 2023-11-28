import { DialogProvider } from '../contexts/DialogContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <DialogProvider>
    <Component {...pageProps} />
  </DialogProvider>
  );
}

export default MyApp
