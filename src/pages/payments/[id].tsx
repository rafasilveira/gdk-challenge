import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useMemo } from 'react'
import { Button, Container, Header } from '../../components'
import { PaymentItem } from '../../components/payment-item/payment-item.component'
import { usePaymentsContext } from '../../store/payments.context'

export default function Payment() {
  const router = useRouter()
  const { id } = router.query

  const { payments, paymentsLoading } = usePaymentsContext()
  const payment = useMemo(
    () => payments?.filter((p) => p.id === Number(id))?.[0] ?? null,
    [payments]
  )

  return (
    <>
      <Header title={`Pagamento ${id}`} />

      <main>
        <Container>
          {paymentsLoading && <div>Carregando...</div>}

          {!paymentsLoading && !!payment && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <PaymentItem label={'id'}>{payment.id}</PaymentItem>
              <PaymentItem label={'Valor'}>{payment.amount}</PaymentItem>
              <PaymentItem label={'Estabelecimento'}>{payment.business}</PaymentItem>
              <PaymentItem label={'Cliente'}>{payment.customer}</PaymentItem>
              <PaymentItem label={'Descrição'}>{payment.description}</PaymentItem>
            </div>
          )}

          {!paymentsLoading && !payment && <div>Sem dados</div>}

          <div>
            <Link href="/">
              <Button>Voltar</Button>
            </Link>
          </div>
        </Container>
      </main>
    </>
  )
}
