import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import HomeContainer from './containers/homeContainer'
import GlobalStyle from './styles/globalStyle'

const app = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <HomeContainer />
      </Fragment>
    </ThemeProvider>
  )
}

export default app
