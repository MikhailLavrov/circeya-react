import styled, { css } from 'styled-components'
import InfoBlockImage from './InfoBlockImage'
import InfoBlockText from './InfoBlockText'

const StyledInfoBlock = styled.div`
  display: flex;
  flex-direction: column;


  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    gap: 105px;
  }

  ${props => props.reversed && css`
    &:last-child {
      @media (min-width: 1024px) {
        display: flex;
        flex-direction: row-reverse;;
      }
    }
  `}
`

const InfoBlock = ({image, 
                    infoTitle, 
                    infoText1, 
                    infoText2, 
                    smallImg,
                    reversed
                  }) => {
  return (
      <StyledInfoBlock reversed={reversed}>
        <InfoBlockImage image={image} smallImg={smallImg} />
        <InfoBlockText title={infoTitle} text1={infoText1} text2={infoText2} />
      </StyledInfoBlock>
  )
}

export default InfoBlock;
