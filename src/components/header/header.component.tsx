import React, { FC } from 'react'
import { ContainerStyled } from '../container/container.style'
import { HeaderStyled } from './header.style'
import Link from 'next/link'
import Head from 'next/head'
import { Button } from '..'

export const Header: FC<{ children?: never; title: string }> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Code challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderStyled>
        <ContainerStyled>
          <div className="content">
            <Link href="/">
              <h1>{title}</h1>
            </Link>

            <div className="buttons">
              <Button target="_blank" href="https://github.com/rafasilveira/gdk-challenge">
                Github
              </Button>
              <Button target="_blank" href="mailto:rafaelbs159@gmail.com">
                Contato
              </Button>
            </div>
          </div>
        </ContainerStyled>
      </HeaderStyled>
    </>
  )
}
