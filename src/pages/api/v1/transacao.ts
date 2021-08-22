import { connectToDatabase } from '../../../config/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { db, client } = await connectToDatabase()

  if (client) {
    switch (req.method) {
      case 'POST':
        const item = JSON.parse(req.body)

        await db.collection('payments').insertOne({
          business: item?.business ?? '-',
          customer: item?.customer ?? '-',
          amount: Number(item?.amount) ?? 0,
          description: item?.description ?? '-'
        })

        return res.status(200).json({ aceito: true })

      case 'GET':
        const { id = '' } = req.query
        const data = await db
          .collection('payments')
          .find(!!id ? { _id: id } : {})
          .sort({ _id: -1 })
          .toArray()
        return res.status(200).json(data)

      default:
        res.status(501).json({ error: `HTTP method ${req.method} not implemented` })
    }
  } else {
    res.status(500).json({ error: `Failed to connect to the database ` })
  }
}
