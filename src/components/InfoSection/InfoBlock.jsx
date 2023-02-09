import styled from 'styled-components'
import InfoBlockImage from './InfoBlockImage'
import InfoBlockText from './InfoBlockText'

const StyledInfoBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 105px;
  }
`

const InfoBlock = ({image, 
                    infoTitle, 
                    infoText1, 
                    infoText2, 
                    smallImg}) => {
  return (
      <StyledInfoBlock>
        <InfoBlockImage image={image} smallImg={smallImg} />
        <InfoBlockText title={infoTitle} text1={infoText1} text2={infoText2} />
      </StyledInfoBlock>
  )
}

export default InfoBlock;
