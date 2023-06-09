import { stripe } from '@/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function hadler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceId } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!priceId) {
    return res.status(400).json({ error: 'Price not found.' })
  }

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
