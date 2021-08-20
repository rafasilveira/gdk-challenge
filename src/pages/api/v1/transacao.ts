export default (req, res) => {
  /** @todo implement sqlite strategy */
  switch (true) {
    case req.method === 'POST':
      res.status(200).json({ aceito: true })
      break

    case req.method === 'GET':
      res.status(200).json({
        estabelecimento: '45.283.163/0001-67',
        cliente: '094.214.930-01',
        valor: 590.01,
        descricao: 'Pagamento a fornecedor auditado via Gedanken!',
        id: 1
      })
      break

    default:
      res
        .status(403)
        .json({ message: `HTTP method ${req.method} not implemented` })
  }
}
