import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Work_Sans } from '@next/font/google'

const appFont = Work_Sans({
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
