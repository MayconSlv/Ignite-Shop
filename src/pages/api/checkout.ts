import { stripe } from '@/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function hadler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const priceId = 'price_1MpyXCKdQvIYVUFKZqoh6O9o'

  const successUrl = 'http://localhost:3000/success'
  const cancelUrl = 'http://localhost:3000/'

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
