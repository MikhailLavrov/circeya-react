import logo from '../assets/common/main-logo.svg';
import styled from 'styled-components'
import phoneIcon from '../assets/icons/phone-icon.svg';

const StyledHeader = styled.header`
  padding: 18px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  background: linear-gradient(0deg, #464341 0%, #010101 100%);

  @media (min-width: 1024px) {
    padding: 35px 0 30px;
  }
`
const HeaderContainer = styled.div`
  padding: 0 20px;
  width: 100%;
  max-width: 1505px;

  display: flex;
  align-items: center;
`
const Logo = styled.div`
  margin-right: auto;
  
  @media (min-width: 1024px) {
    margin-left: 70px;
  }
  
  & img {
    @media (min-width: 1024px) {
      width: 214px;
    }
  }
`
const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  font-family: 'Manrope';

  & img {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  & span {
    display: none;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;

    color: #ffffff;

    @media (min-width: 1024px) {
      display: inline;
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo>
          <img src={logo} width={120} height={20} alt='logo' />
        </Logo>
        <PhoneLink href="tel:+74954954954">
          <img src={phoneIcon} width={15} height={19} alt="phone-icon" />
          <span>+7 (495) 495-49-54</span>
        </PhoneLink>
      </HeaderContainer>
    </StyledHeader>
  )
}

export default Header
