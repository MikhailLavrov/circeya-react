import logo from '../assets/common/main-logo.svg';
import styled from 'styled-components'
import phoneIcon from '../assets/icons/phone-icon.svg';

const StyledHeader = styled.header`
  padding: 18px 20px;
  display: flex;
  align-items: center;
  color: #ffffff;
  background: linear-gradient(0deg, #464341 0%, #010101 100%);
`
const Logo = styled.div`
  margin-right: auto;
`
const PhoneLink = styled.a`
  display: flex;
  align-items: center;
`

const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <img src={logo} width={120} height={20} alt='logo' />
      </Logo>
      <PhoneLink href="tel:+777777">
        <img src={phoneIcon} width={15} height={19} alt="phone-icon" />
      </PhoneLink>
    </StyledHeader>
  )
}

export default Header
