import styled from 'styled-components'
import { rem } from '../../../utils'
import STYLES from '../../../style/styles.json'
import { Button, Typography } from '../../../components'
import { TOKENS } from '../../../utils'

const Container = styled.div`
  min-width: ${rem(392)};
  max-width: ${rem(400)};
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
`
const InvestmentsArea = styled.div`
  padding: ${rem(16)} ${rem(16)};
  border-radius: ${rem(2)};
  border: ${rem(1)} solid ${STYLES.palette.border.lightGrey};
  box-shadow: 0 0 ${rem(8)} rgba(0, 0, 0, 0.2);
  width: 100%;
`

interface DetailStyleProps {
  detailWidth?: string
}

const Detail = styled.div<DetailStyleProps>`
  width: ${(props) => props.detailWidth || '100%'};
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: ${rem(16)};
  }
`

const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(8)};
`

interface DetailAreaProps {
  token: string
  icon: string
  amount: string
  detailWidth?: string
  style?: React.CSSProperties
}

const DetailArea = ({
  token,
  icon,
  amount,
  detailWidth,
  style,
}: DetailAreaProps) => (
  <Detail detailWidth={detailWidth} style={{ ...style }}>
    <Typography
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: rem(16),
        fontSize: rem(18),
        lineHeight: '32px',
      }}
      color={STYLES.palette.content.grey}
    >
      <img src={icon} alt={`${icon}-logo`} width={48} height={48} />
      {token}
    </Typography>
    <Typography
      style={{ fontSize: rem(18), lineHeight: '32px' }}
      color={STYLES.palette.content.grey}
    >
      {amount}
    </Typography>
  </Detail>
)

const Investments = () => {
  return (
    <Container>
      <InvestmentsArea>
        <Typography
          tag="h2"
          style={{
            fontSize: rem(28),
            lineHeight: '40px',
            marginBottom: rem(8),
          }}
        >
          Investments
        </Typography>
        <DetailArea
          token="Tome 10"
          icon="assets/tome-eth.png"
          amount="$320.78"
        />
        {TOKENS.map((token, index) => (
          <DetailArea
            key={`${token.icon} - ${index}`}
            token={token.token}
            icon={`assets/${token.icon}`}
            amount={token.amount}
            detailWidth={'85%'}
            style={{ position: 'relative', left: '15%' }}
          />
        ))}
      </InvestmentsArea>
      <ButtonArea>
        <Button buttonType="grey">Sell</Button>
        <Button buttonType="blue">Buy</Button>
      </ButtonArea>
    </Container>
  )
}

export default Investments
