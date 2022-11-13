import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Wrapper from './wrapper'
import STYLES from './style/styles.json'

const AppContainer = styled.div`
  height: 100%;
  margin: auto;
  background: ${STYLES.palette.background.white};
`

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Wrapper />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  )
}

export default App
