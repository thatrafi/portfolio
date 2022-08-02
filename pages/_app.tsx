import '../styles/index.scss'
import type { AppProps } from 'next/app'
import Header from '../components/molecules/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="app">
  <Header />
  <Component {...pageProps} />
  </div>
}

export default MyApp
