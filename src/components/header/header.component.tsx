import React, { FC } from 'react'
import { ContainerStyled } from '../container/container.style'
import { HeaderStyled } from './header.style'
import Link from 'next/link'

export const Header: FC<{ children?: never; title: string }> = ({ title }) => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <div className="content">
          <Link href="/">
            <h1>{title}</h1>
          </Link>

          <div className="buttons">
            <a href="https://github.com/rafasilveira/gdk-challenge">Github</a>
            <a href="mailto:rafaelbs159@gmail.com">Contact me</a>
          </div>
        </div>
      </ContainerStyled>
    </HeaderStyled>
  )
}
