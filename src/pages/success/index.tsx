import { SuccessContainer, ImageContainer } from '@/styles/pages/success'
import Link from 'next/link'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhull <strong>Maycon Silva</strong>, sua
        <strong> Camisa tal tal </strong>
        já está a caminho de casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
