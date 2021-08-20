import Link from 'next/link'
import React, { FC } from 'react'
import { IPayment } from '../../interfaces/payment.interface'
import { usePaymentsContext } from '../../store/payments.context'

import { TableStyled } from './table.style'

export const Table: FC<{ children?: never }> = () => {
  const { payments, paymentsLoading } = usePaymentsContext()

  return (
    <TableStyled>
      <div className="header">
        <div>id</div>
        <div>Estabelecimento</div>
        <div>Cliente</div>
        <div>Valor</div>
        <div>Descrição</div>
      </div>

      {paymentsLoading && <div>Carregando...</div>}

      {payments?.length ? (
        <div className="body">
          {payments.map((item) => (
            <Link href={`payments/${item.id}`} key={item.id}>
              <div className="row">
                <div>{item.id}</div>
                <div>{item.business}</div>
                <div>{item.customer}</div>
                <div>{item.amount}</div>
                <div>{item.description}</div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div>Sem dados...</div>
      )}
    </TableStyled>
  )
}
