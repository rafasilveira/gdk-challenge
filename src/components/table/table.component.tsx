import React, { FC } from 'react'

import { TableStyled } from './table.style'
export const Table: FC<{ children?: never }> = () => (
  <TableStyled>Hello I will be the table</TableStyled>
)
