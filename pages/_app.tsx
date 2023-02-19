import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'

const appFont = Montserrat({
  weight: "400",
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sitthiphon Skulphan | Software Developer</title>
        <link rel="shortcut icon" href="/dev_24012.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" /> */}
      </Head>
      <div className={appFont.className}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
