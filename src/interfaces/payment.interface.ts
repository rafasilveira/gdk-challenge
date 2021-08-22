export interface IPayment {
  business: string
  customer: string
  amount: number
  description: string
  id: string
}

export type INewPayment = Omit<IPayment, 'id'>
