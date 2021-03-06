import React from 'react'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
