import { createGlobalStyle, ThemeProvider } from 'styled-components'

import '@fontsource/montserrat'

const styled = { createGlobalStyle }

const GlobalStyle = styled.createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family};
  }
`

const theme = {
  font: {
    family: "Montserrat, 'Open Sans', sans-serif",
  },
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
