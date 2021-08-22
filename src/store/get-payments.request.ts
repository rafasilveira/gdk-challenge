import useSWR from 'swr'
import { IPayment } from '../interfaces/payment.interface'

/** @todo replace by proper api call */
// export const getPayments: (id?: string) => Promise<IPayment[]> = async () => {
//   const response = await fetch('/api/v1/transacao')
//   const data = await response.json()
//   return data.map((item) => ({
//     business: item.business,
//     customer: item.customer,
//     amount: item.amount,
//     description: item.description,
//     id: item._id
//   }))
// }

export const getPayments: (id?: string) => Promise<IPayment[]> = () =>
  fetch('/api/v1/transacao')
    .then((res) => res.json())
    .then((data) =>
      data.map((item) => ({
        business: item.business,
        customer: item.customer,
        amount: item.amount,
        description: item.description,
        id: item._id
      }))
    )
    .catch((err) => ({ error: err }))

export const usePayments = (id?: string) => useSWR('/api/v1/transacoes', () => getPayments(id))
