import { stripe } from '@/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function hadler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const priceId = ''

  const successUrl = `${process.env.NEXT_URL}/success`
  const cancelUrl = `${process.env.NEXT_URL}`

  const checkout = await stripe.checkout.sessions.create({
    cancel_url: successUrl,
    success_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  })
}
