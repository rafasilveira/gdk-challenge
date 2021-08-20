import React, { useState, useContext, createContext, FC } from 'react'
import { IPayment } from '../interfaces/payment.interface'
import { usePayments } from './get-payments.request'

interface IPaymentsData {
  payments: IPayment[]
  paymentsLoading: boolean
}

const PaymentsContext = createContext({} as IPaymentsData)

export const PaymentsProvider: FC = ({ children }) => {
  /** @todo call API */
  const { data: payments, isValidating: paymentsLoading } = usePayments()

  return (
    <PaymentsContext.Provider value={{ payments, paymentsLoading }}>
      {children}
    </PaymentsContext.Provider>
  )
}

export const usePaymentsContext = (): IPaymentsData => {
  const ctx = useContext(PaymentsContext)

  if (!Object.entries(ctx).length) {
    throw new Error('usePaymentsContext must be used within a PaymentsContext Provider')
  }

  return ctx
}
