import styled from 'styled-components'
import InfoBlockContent from './InfoBlockContent'
// import image1 from '../../assets/infoblocks/info1.jpg';
import image2 from '../../assets/infoblocks/info2.jpg';
// import image3 from '../../assets/infoblocks/info3.jpg';
import image4 from '../../assets/infoblocks/info4.jpg';

const StyledInfoBlock = styled.section`
  min-height: 226px;

  display: flex;
  flex-direction: column;
`
const InfoTitle = styled.h1`
  margin: 0;
  max-width: 320px;
  padding: 20px;

  color: #141414;
  font-size: 24px;
  line-height: 1.3;
  font-weight: 500;
  text-transform: uppercase;
`

const InfoBlock = () => {
  return (
    <StyledInfoBlock>
      <InfoTitle>ut aliquip ex&nbsp;ea&nbsp;commodo consequat</InfoTitle>
      <InfoBlockContent image={image2} />
      <InfoBlockContent image={image4} />
    </StyledInfoBlock>
  )
}

export default InfoBlock;
