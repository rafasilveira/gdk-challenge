import useSWR from 'swr'
import { IPayment } from '../interfaces/payment.interface'

const mock = [
  {
    estabelecimento: '45.283.163/0001-67',
    cliente: '094.214.930-01',
    valor: 590.01,
    descricao: 'Pagamento a fornecedor auditado via Gedanken!',
    id: 1
  },
  {
    estabelecimento: '45.283.163/0001-67',
    cliente: '094.214.930-01',
    valor: 590.01,
    descricao: 'Pagamento a fornecedor auditado via Gedanken!',
    id: 2
  }
]

/** @todo replace by proper api call */
export const getPayments: () => Promise<IPayment[]> = () =>
  Promise.resolve(mock).then((data) =>
    data.map((item) => ({
      business: item.estabelecimento,
      customer: item.cliente,
      amount: item.valor,
      description: item.descricao,
      id: item.id
    }))
  )

export const usePayments = () => useSWR('/api/v1/transacoes', () => getPayments())
