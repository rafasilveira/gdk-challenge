import Link from 'next/link'
import React, { FC } from 'react'
import { Container, Table, Header, Button } from '../components'

export const Home: FC<{ children?: never }> = () => {
  return (
    <>
      <Header title={'Pagamentos'} />

      <main>
        <Container>
          <Table />
          <div style={{ marginTop: '1rem' }}>
            <Link href="/payments/new">
              <Button>Adicionar novo</Button>
            </Link>
          </div>
        </Container>
      </main>
    </>
  )
}

export default Home
