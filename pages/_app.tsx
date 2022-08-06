import '../styles/index.scss'
import type { AppProps } from 'next/app'
import Header from '../components/molecules/Header'
import Footer from '../components/molecules/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="app">
  <Header />
  <Component {...pageProps} />
  <Footer />
  </div>
}

export default MyApp
