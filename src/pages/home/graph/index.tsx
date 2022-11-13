import styled from 'styled-components'
import { Sprite, Typography } from '../../../components'
import { DUMMYGRAPHDATA, rem } from '../../../utils'
import STYLES from '../../../style/styles.json'
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'

const Container = styled.div`
  min-width: ${rem(750)};
  max-width: ${rem(800)};
  display: flex;
  align-item: flex-start;
  flex-direction: column;
  gap: ${rem(8)};
`
const PortfolioArea = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(12)};
`

const Graph = () => {
  return (
    <Container>
      <Typography
        tag="h2"
        style={{
          fontSize: rem(28),
          lineHeight: '40px',
        }}
      >
        Portfolio
      </Typography>
      <PortfolioArea>
        <Typography
          tag="h2"
          style={{
            fontSize: rem(28),
            lineHeight: '40px',
            marginBottom: rem(8),
          }}
        >
          $1005.83
        </Typography>
        <Typography
          color={STYLES.palette.graph.green}
          style={{
            fontSize: rem(24),
            lineHeight: '32px',
            letterSpacing: '-0.5px',
          }}
        >
          <Sprite id="arrow-up-icon" width={24} height={24} />
          $20.45
        </Typography>
        <Typography
          color={STYLES.palette.graph.green}
          style={{
            fontSize: rem(24),
            lineHeight: '32px',
            letterSpacing: '-0.5px',
          }}
        >
          3.74%
        </Typography>
      </PortfolioArea>
      <Typography
        style={{
          background: STYLES.palette.background.grey,
          padding: `${rem(8)} ${rem(16)}`,
          borderRadius: rem(2),
          width: 'fit-content',
        }}
        color={STYLES.palette.content.black}
      >
        1M
      </Typography>
      <LineChart
        width={730}
        height={400}
        data={DUMMYGRAPHDATA}
        style={{ marginBottom: rem(16) }}
      >
        <XAxis dataKey="name" />
        <YAxis hide={true} />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      <Typography
        color={STYLES.palette.content.black}
        style={{
          fontSize: rem(24),
          lineHeight: '32px',
          marginBottom: rem(16),
        }}
      >
        Product Information
      </Typography>
      <Typography color={STYLES.palette.content.black}>
        The Polygon Top Governance Index is a equally weighted index that tracks
        the performance of the most relevant governance tokens on polygon.
      </Typography>
    </Container>
  )
}

export default Graph
