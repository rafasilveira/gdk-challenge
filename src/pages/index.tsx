import { Container, Table, Header } from '../components'

export default function Home() {
  return (
    <>
      <Header title={'Payments'} />

      <main>
        <Container>
          <Table />
        </Container>
      </main>
    </>
  )
}
