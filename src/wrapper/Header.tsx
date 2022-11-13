import styled from 'styled-components'
import { Button, Typography } from '../components'
import STYLES from '../style/styles.json'
import { rem } from '../utils'

const Container = styled.div`
  background: ${STYLES.palette.background.white};
  padding: ${rem(30)};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: -webkit-fill-available;
  z-index: 9999;
`
const LogoArea = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`
const ConnectArea = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(8)};
`

const Header = () => {
  return (
    <Container>
      <LogoArea>
        <img src="assets/Tome_logo_Black.png" alt="logo" width={180} />
        <Typography
          style={{
            lineHeight: '24px',
            letterSpacing: '7px',
            position: 'relative',
            right: '2px',
          }}
        >
          Token Home
        </Typography>
      </LogoArea>
      <ConnectArea>
        <Typography style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="assets/eth.png"
            alt="eth"
            height={24}
            style={{ marginRight: rem(12) }}
          />
          Ethereum Network
        </Typography>
        <Button buttonType="grey">Connect</Button>
      </ConnectArea>
    </Container>
  )
}

export default Header
