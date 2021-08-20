export interface IPayment {
  business: string
  customer: string
  amount: number
  description: string
  id: number
}

export type INewPayment = Omit<IPayment, 'id'>
