import { globalStyle } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import { Container, Header } from '@/styles/pages/app'
import logoImg from '../assets/logo.svg'
import Image from 'next/image'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

globalStyle()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
