import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: 18px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: end;
  background-color: #141414;
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  font-family: 'Roboto';
`

const Footer = () => {
  return (
    <StyledFooter>
      <div>© TEST, 1022–2022</div>
    </StyledFooter>
  )
}

export default Footer
