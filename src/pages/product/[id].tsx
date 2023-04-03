import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta x</h1>
        <span>R$ 98,00</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          deleniti impedit corrupti. Quaerat nostrum eius sit ut dolore! Tempore
          molestiae minima adipisci placeat totam! Officia molestiae doloremque
          earum nam ea?
        </p>

        <button>comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
