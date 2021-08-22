import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from '../common/global.style'
import { PaymentsProvider } from '../store/payments.context'

function MyApp({ Component, pageProps }) {
  return (
    <PaymentsProvider>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer />
    </PaymentsProvider>
  )
}

export default MyApp
