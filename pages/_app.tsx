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
      </Head>
      <style jsx global>{`
        html {
          font-family: ${appFont.style.fontFamily};
        }
        `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
