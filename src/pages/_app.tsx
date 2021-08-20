import GlobalStyle from '../common/global.style'
import { PaymentsProvider } from '../store/payments.context'

function MyApp({ Component, pageProps }) {
  return (
    <PaymentsProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </PaymentsProvider>
  )
}

export default MyApp
