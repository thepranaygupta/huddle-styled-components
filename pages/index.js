import { GlobalStyles } from '../components/styles/Global'
import Header from '../components/Header'
import { ThemeProvider } from 'styled-components'
import { Container } from '../components/styles/Container.styled'
import content from '../content'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Head from 'next/head'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Head>
          <title>Huddle</title>
        </Head>
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  )
}
