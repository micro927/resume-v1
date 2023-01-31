import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Open_Sans } from '@next/font/google'

const inter = Open_Sans({
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className} >
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
