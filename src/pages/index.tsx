import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import camiseta from '../assets/camisa2.png'

import 'keen-slider/keen-slider.min.css'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

interface HomeProps {
  products: {
    id: string
    name: string
    imageURL: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta} alt="" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta} alt="" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta} alt="" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta} alt="" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

export async function getServerSideProps() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageURL: product.images[0],
      price: (price.unit_amount as number) / 100,
    }
  })

  return {
    props: {
      products,
    },
  }
}
