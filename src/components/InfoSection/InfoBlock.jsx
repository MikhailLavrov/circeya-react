import styled from 'styled-components'
import Title from '../common/Title'
import InfoBlockImage from './InfoBlockImage'
import InfoBlockText from './InfoBlockText'

const StyledInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`

const InfoBlock = ({headerLevel, headerText, image, infoTitle, infoText1, infoText2, smallImg}) => {
  return (
      <StyledInfoBlock>
        <Title headerLevel={headerLevel} children={headerText} />
        <InfoBlockImage image={image} smallImg={smallImg} />
        <InfoBlockText title={infoTitle}
                        text1={infoText1}
                        text2={infoText2} />
      </StyledInfoBlock>
  )
}

export default InfoBlock;
