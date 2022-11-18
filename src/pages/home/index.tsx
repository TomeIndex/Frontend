import styled from 'styled-components'
import { rem } from '../../utils'
import Graph from './graph'
import Investments from './investments'

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: ${rem(40)};
  padding: ${rem(40)} ${rem(30)};
`

const Home = () => {
  return <Container>
    <Graph />
    <Investments />
  </Container>
}

export default Home
