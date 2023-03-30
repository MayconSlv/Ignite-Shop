import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'

import camiseta from '../assets/camisa2.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta} alt="" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta} alt="" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
