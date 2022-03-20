import styled from 'styled-components'
import { Nav, Button } from 'react-bootstrap'
import { ThemeType } from '../../theme/color'
import { getTypography, Typography } from '../../theme/typography'
import { getColor, Color } from '../../theme/color'
import { getUnitAsPixels } from '../../theme/layout'
import { pixelate } from '../../theme/helpers'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 84px;
  align-items: center;
  border-bottom: solid rgba(255, 255, 255, 0.5);
`

export const Navbar = styled(Nav)`
  display: flex;
`

export const NavItem = styled(Button)`
  margin-right: ${getUnitAsPixels(1.5)};
  border: none;
  background: inherit;
  :hover {
    background: inherit;
    border: none;
    border-radius: 0;
    border-bottom: solid ${getColor(Color.WHITE)};
  }
  a {
    ${getTypography(Typography.NAVIGATION)}
    color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
  }
`

export const Play = styled(NavItem)`
  padding: 0 30px;
  margin-right: ${getUnitAsPixels(3)};
  border: solid ${getColor(Color.GREEN_100)};
  :hover {
    border: solid ${getColor(Color.GREEN_100)};
    background: ${getColor(Color.GREEN_100)};
    border-radius: ${getUnitAsPixels(0.5)};
  }
`