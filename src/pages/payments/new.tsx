import Link from 'next/link'
import { FC } from 'react'
import { Button, Container, Header } from '../../components'
import { Input } from '../../components/input/input.component'
import { PaymentItem } from '../../components/payment-item/payment-item.component'

export const NewPayment: FC<{ children?: never }> = () => {
  return (
    <>
      <Header title={'Novo pagamento'} />

      <main>
        <Container>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <PaymentItem label={'Novo pagamento'}>
              <Input
                label={'Estabelecimento'}
                placeholder={'CNPJ'}
                value={''}
                handleChange={(e) => console.log(e)}
              />
              <Input
                label={'Cliente'}
                placeholder={'CPF'}
                value={''}
                handleChange={(e) => console.log(e)}
              />
              <Input
                label={'Valor'}
                placeholder={'1234,56'}
                fieldType={'number'}
                value={''}
                handleChange={(e) => console.log(e)}
              />
              <Input
                label={'Descrição'}
                placeholder={'Pagamento...'}
                value={''}
                handleChange={(e) => console.log(e)}
              />
            </PaymentItem>
          </div>

          <div>
            <Link href="/">
              <Button>Voltar</Button>
            </Link>
            <Button onClick={() => console.log('todo: handle submit')}>Adicionar</Button>
          </div>
        </Container>
      </main>
    </>
  )
}

export default NewPayment
