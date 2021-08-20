import { useRouter } from 'next/dist/client/router'
import { useMemo } from 'react'
import { Container, Header } from '../../components'
import { PaymentItem } from '../../components/payment-item/payment-item.component'
import { usePaymentsContext } from '../../store/payments.context'

export default function Payment() {
  const router = useRouter()
  const { id } = router.query

  const { payments, paymentsLoading } = usePaymentsContext()
  const payment = useMemo(() => payments?.filter((p) => p.id === Number(id))?.[0] ?? null, [payments])

  return (
    <>
      <Header title={`Payment ${id}`} />

      <main>
        <Container>
          {paymentsLoading && <div>Carregando...</div>}

          {!paymentsLoading && !!payment && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <PaymentItem label={'id'} text={`${payment.id}`} />
              <PaymentItem label={'Valor'} text={`${payment.amount}`} />
              <PaymentItem label={'Estabelecimento'} text={`${payment.business}`} />
              <PaymentItem label={'Cliente'} text={`${payment.customer}`} />
              <PaymentItem label={'Descrição'} text={`${payment.description}`} />
            </div>
          )}

          {!paymentsLoading && !payment && <div>Sem dados</div>}
        </Container>
      </main>
    </>
  )
}
