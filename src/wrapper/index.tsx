import styled from 'styled-components'
import { rem } from '../utils'
import Header from './Header'
import STYLES from '../style/styles.json'
import Routes from '../routes'

const Container = styled.div`
  height: 100%;
  font-family: ${STYLES.typography};
  overflow: auto;
`
const FakeDiv = styled.div`
  width: 100%;
  height: ${rem(150)};
`
const Content = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = () => {
  return (
    <Container>
      <Header />
      <FakeDiv />
      <Content>
        <Routes />
      </Content>
    </Container>
  )
}

export default Wrapper
