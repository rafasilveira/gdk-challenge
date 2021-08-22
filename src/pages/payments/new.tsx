import Link from 'next/link'
import { FC, useState } from 'react'
import { Button, Container, Header, IInputProps, Input, PaymentItem } from '../../components'
import { INewPayment } from '../../interfaces/payment.interface'
import { addPayment } from '../../store/add-payment.request'

type DataField = IInputProps & { key: string }

export const NewPayment: FC<{ children?: never }> = () => {
  const [values, setValues] = useState<INewPayment>({
    business: '',
    customer: '',
    amount: 0,
    description: ''
  })

  const defaultHandleChange = (event, key: keyof INewPayment) => {
    setValues({
      ...values,
      [key]: event.target.value
    })
  }

  const handleSubmit = () => {
    Object.entries(values).forEach(([key, value]) => {
      if (!value) {
        console.log(`error: key ${key} is empty`)
        return
      }
    })

    addPayment(values).then((res) => {
      setValues({
        business: '',
        customer: '',
        amount: 0,
        description: ''
      })
    })
  }

  const fields: DataField[] = [
    {
      label: 'Estabelecimento',
      placeholder: 'CNPJ',
      value: values.business,
      key: 'business',
      fieldType: 'text',
      handleChange: (event) => defaultHandleChange(event, 'business')
    },
    {
      label: 'Cliente',
      placeholder: 'CPF',
      value: values.customer,
      key: 'customer',
      fieldType: 'text',
      handleChange: (event) => defaultHandleChange(event, 'customer')
    },
    {
      label: 'Valor',
      placeholder: '1234.56',
      value: values.amount,
      key: 'amount',
      fieldType: 'number',
      handleChange: (event) => defaultHandleChange(event, 'amount')
    },
    {
      label: 'Descrição',
      placeholder: 'Pagamento...',
      value: values.description,
      key: 'description',
      fieldType: 'text',
      handleChange: (event) => defaultHandleChange(event, 'description')
    }
  ]

  /** @todo api call */
  return (
    <>
      <Header title={'Novo pagamento'} />
      <main>
        <Container>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <PaymentItem label={'Novo pagamento'}>
              {fields.map((f) => (
                <Input {...f} />
              ))}
            </PaymentItem>
          </div>

          <div>
            <Link href="/">
              <Button>Voltar</Button>
            </Link>
            <Button onClick={() => handleSubmit()}>Adicionar</Button>
          </div>
        </Container>
      </main>
    </>
  )
}

export default NewPayment
