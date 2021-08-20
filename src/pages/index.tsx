import { Container, Table, Header } from '../components'

export default function Home() {
  return (
    <>
      <Header title={'Pagamentos'} />

      <main>
        <Container>
          <Table />
        </Container>
      </main>
    </>
  )
}
