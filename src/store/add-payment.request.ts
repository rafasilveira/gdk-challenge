import { INewPayment } from '../interfaces/payment.interface'

export const addPayment = async (payment: INewPayment) => {
  const response = await fetch('/api/v1/transacao', {
    method: 'POST',
    body: JSON.stringify(payment)
  })
  return await response.json()
}
