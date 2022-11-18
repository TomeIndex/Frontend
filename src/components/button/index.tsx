import styled from 'styled-components'
import STYLES from '../../style/styles.json'
import { rem } from '../../utils'

interface StyleProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonType: 'grey' | 'blue'
}

const Container = styled.button<StyleProps>`
  border: none;
  background: ${(props) =>
    props.buttonType === 'blue'
      ? STYLES.palette.foundation.accent
      : STYLES.palette.background.grey};
  color: ${(props) =>
    props.buttonType === 'blue'
      ? STYLES.palette.background.white
      : STYLES.palette.border.darkGrey};
  border-radius: ${rem(2)};
  height: ${rem(64)};
  min-width: ${rem(192)};
  text-transform: uppercase;
  cursor: pointer;
  font-family: ${STYLES.typography};
`

interface ButtonProps extends StyleProps {
  children: React.ReactNode
  onClick?: () => void
  style?: React.CSSProperties
}

const Button = ({ buttonType, onClick, style, children }: ButtonProps) => {
  return (
    <Container buttonType={buttonType} onClick={onClick} style={{ ...style }}>
      {children}
    </Container>
  )
}

export default Button
